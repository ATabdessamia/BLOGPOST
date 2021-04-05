import mongoose from "mongoose";
import Post from "./PostModel.js";

const commentSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    comment: {
      type: String,
      required: true,
      required: [true, "لا يمكن أن يكون التعليق فارغًا"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

commentSchema.statics.calcAverageRatings = async function (postId) {
  const stats = await this.aggregate([
    {
      $match: { post: postId },
    },
    {
      $group: {
        _id: "$post",
        rating: { $avg: "$rating" },
      },
    },
  ]);

  if (stats.length > 0) {
    await Post.findByIdAndUpdate(postId, {
      rating: stats[0].rating,
    });
  } else {
    await Post.findByIdAndUpdate(postId, {
      rating: 0,
    });
  }
};

commentSchema.pre(/^findOneAnd/, async function (next) {
  this.com = await this.findOne();
  next();
});

commentSchema.post(/^findOneAnd/, async function () {
  // await this.findOne(); does NOT work here, query has already executed
  await this.com.constructor.calcAverageRatings(this.com.post);
});

commentSchema.pre(/^find/, function (next) {
  // fill up reference
  this.populate({
    path: "user",
    select: "firstName lastName photo",
  });
  next();
});
const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

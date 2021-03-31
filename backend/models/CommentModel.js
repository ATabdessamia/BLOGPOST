import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

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

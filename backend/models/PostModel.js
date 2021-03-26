import mongoose from "mongoose";
import ArabSlug from "../utilits/ArabSlug.js";

const reviewSchema = mongoose.Schema(
  {
    rating: { type: Number, required: true, min: 1, max: 5 },
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

const postSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "المنشور يحتاج العنوان"],
  },
  description: {
    type: String,
    required: [true, "المنشور يحتاج وصف الموضوع"],
  },
  cover: {
    type: String,
    required: [true, "المنشور يحتاج الصورة"],
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  slug: String,
});

postSchema.index({ slug: 1 });

postSchema.pre("save", function (next) {
  this.slug = ArabSlug(this.title);
  next();
});

postSchema.pre(/^find/, function (next) {
  // fill up reference
  this.populate({
    path: "reviews",
  }).populate({
    path: "author",
    select: "firstName lastName photo",
  });
  next();
});

var Post = mongoose.model("Post", postSchema);

export default Post;

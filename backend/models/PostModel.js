import mongoose from "mongoose";
import ArabSlug from "../utilits/ArabSlug.js";

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
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
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
    path: "author",
    select: "firstName lastName photo",
  });
  next();
});

const Post = mongoose.model("Post", postSchema);

export default Post;

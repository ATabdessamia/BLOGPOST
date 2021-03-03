import mongoose from "mongoose";
import slugify from "slugify";

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
    default: new Date(),
  },
  slug: String,
});

postSchema.index({ slug: 1 });

postSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

postSchema.pre(/^find/, function (next) {
  // fill up reference
  this.populate({
    path: "reviews",
  });
  next();
});

var Post = mongoose.model("Post", postSchema);

export default Post;

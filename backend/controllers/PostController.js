import multer from "multer";
import sharp from "sharp";

import Post from "../models/PostModel.js";
import catchAsync from "../utilits/CatchAsync.js";
import {
  deleteHand,
  updateHand,
  createHand,
  getAllHand,
  getAllHandBY,
  getHand,
} from "./HandlerController.js";
import AppError from "../utilits/AppErrors.js";

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new AppError("ليست صورة! يرجى تحميل الصور فقط.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadPostImages = upload.single("cover");

export const resizePostImages = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  /* cover image */
  req.body.cover = `post-${
    req.params.id || req.body.author
  }-${Date.now()}-cover.jpeg`;

  await sharp(req.file.buffer)
    .resize(2000, 1333)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`../frontend/public/images/posts/${req.body.cover}`);

  next();
});

export const ratePost = catchAsync(async (req, res, next) => {
  console.log(req.body.rating);
  const doc = await Post.findByIdAndUpdate(req.params.id, {
    rating: req.body.rating,
  });

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

export const getPostsBy = getAllHandBY(Post);
//fetching specfic data
export const getPost = getHand(Post);
//fetch data
export const getAllPosts = getAllHand(Post);
// create data
export const createNewPost = createHand(Post);
//updating data
export const updatePost = updateHand(Post);
// deleting data
export const deletePost = deleteHand(Post);

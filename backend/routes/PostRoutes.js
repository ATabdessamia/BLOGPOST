import express from "express";

import {
  getAllPosts,
  createNewPost,
  getPost,
  updatePost,
  deletePost,
  uploadPostImages,
  resizePostImages,
  getPostsBy,
  ratePost,
} from "../controllers/PostController.js";
import { protect, isLoggedIn } from "../controllers/AuthController.js";

const postRouter = express.Router();

postRouter.use(isLoggedIn);
postRouter.use(protect);

postRouter
  .route("/")
  .get(getAllPosts)
  .post(uploadPostImages, resizePostImages, createNewPost);

postRouter.route("/:id/rating").patch(ratePost);

postRouter
  .route("/:id")
  .get(getPost)
  .patch(uploadPostImages, resizePostImages, updatePost)
  .delete(deletePost);

postRouter.route("/profile/:id").get(getPostsBy);

export default postRouter;

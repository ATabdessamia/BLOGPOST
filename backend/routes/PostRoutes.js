import express from "express";

import {
  getAllPosts,
  createNewPost,
  getPost,
  updatePost,
  deletePost,
  uploadPostImages,
  resizePostImages,
} from "../controllers/PostController.js";
import { protect } from "../controllers/AuthController.js";

const postRouter = express.Router();

postRouter.route("/").get(getAllPosts).post(protect, createNewPost);
postRouter
  .route("/:id")
  .get(getPost)
  .patch(protect, uploadPostImages, resizePostImages, updatePost)
  .delete(protect, deletePost);

export default postRouter;

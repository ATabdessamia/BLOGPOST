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

const postRouter = express.Router();

postRouter
  .route("/")
  .get(getAllPosts)
  .post(uploadPostImages, resizePostImages, createNewPost);
postRouter
  .route("/:id")
  .get(getPost)
  .patch(uploadPostImages, resizePostImages, updatePost)
  .delete(deletePost);

export default postRouter;

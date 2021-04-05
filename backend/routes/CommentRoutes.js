import express from "express";

import {
  createNewComment,
  getAllComments,
  ratePost,
} from "../controllers/CommentController.js";
import { protect, isLoggedIn } from "../controllers/AuthController.js";

const commentRouter = express.Router();

commentRouter.use(isLoggedIn);
commentRouter.use(protect);

commentRouter.route("/:id/post").post(createNewComment).get(getAllComments);
commentRouter.route("/:id/rating").patch(ratePost);
export default commentRouter;

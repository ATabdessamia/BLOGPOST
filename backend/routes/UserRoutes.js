import express from "express";

import {
  getUser,
  updateMe,
  getMe,
  uploadUserPhoto,
  resizeUserPhoto,
} from "../controllers/UserController.js";
import {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  logout,
  isLoggedIn,
} from "../controllers/AuthController.js";

const userRouter = express.Router();

userRouter.route("/signup").post(signup);
userRouter.route("/signin").post(signin);
userRouter.route("/logout").get(logout);

userRouter.route("/forgotPassword").post(forgotPassword);
userRouter.route("/resetPassword/:token").patch(resetPassword);

// Protect all routes after this middleware
userRouter.use(isLoggedIn);
userRouter.use(protect);

userRouter.route("/updatePassword").patch(updatePassword);
userRouter.route("/me").get(getMe, getUser);
userRouter.route("/updateMe").patch(uploadUserPhoto, resizeUserPhoto, updateMe);
userRouter.route("/:id").get(getUser);

export default userRouter;

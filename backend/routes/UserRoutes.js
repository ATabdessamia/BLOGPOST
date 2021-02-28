import express from "express";

import {
  getUser,
  updateMe,
  deleteMe,
  getMe,
  uploadUserPhoto,
  resizeUserPhoto,
} from "../controllers/UserController.js";
import {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  logOut,
} from "../controllers/AuthController.js";

const userRouter = express.Router();

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);
userRouter.route("/logout").get(logOut);

userRouter.post("/forgotPassword", forgotPassword);
userRouter.patch("/resetPassword/:token", resetPassword);

userRouter.route("/:id").get(getUser);

// Protect all routes after this middleware
userRouter.use(protect);

userRouter.patch("/updatePassword", updatePassword);
userRouter.get("/me", getMe, getUser);
userRouter.route("/updateMe").patch(uploadUserPhoto, resizeUserPhoto, updateMe);
userRouter.route("/deleteMe").delete(deleteMe);

export default userRouter;

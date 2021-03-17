import multer from "multer";
import sharp from "sharp";

import AppError from "../utilits/AppErrors.js";
import User from "../models/UserModel.js";
import catchAsync from "../utilits/CatchAsync.js";
import { getHand } from "./HandlerController.js";

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

export const uploadUserPhoto = upload.single("photo");

export const resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`../frontend/public/images/users/${req.file.filename}`);

  next();
});

const filterField = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    if (allowedFields.includes(key)) newObj[key] = obj[key];
  });

  return newObj;
};

//get for current user
export const getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

//updating current user
export const updateMe = catchAsync(async (req, res, next) => {
  // if user post a password or passwordConfirm
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "هذا الطريق ليس لتحديث كلمة المرور، الرجاء استخدام /updatePassword",
        400
      )
    );
  }

  //update user body
  const filterBody = filterField(req.body, "firstName", "lastName", "email");
  if (req.file) filterBody.photo = req.file.filename;

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    date: {
      user: updatedUser,
    },
  });
});

//fetching specfic data
export const getUser = getHand(User);

import crypto from "crypto";
import jwt from "jsonwebtoken";
import { promisify } from "util";

import catchAsync from "../utilits/CatchAsync.js";
import AppError from "../utilits/AppErrors.js";
import User from "../models/UserModel.js";
import Email from "../utilits/Email.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  //cookies
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    data: {
      token,
      data: {
        user,
      },
    },
  });
};

export const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  createSendToken(newUser, 201, res);
});

export const signin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // check if exist
  if (!email || !password)
    return next(
      new AppError("يرجى تقديم البريد الإلكتروني أو كلمة المرور", 400)
    );

  //check users exist and password correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError("البريد الإلكتروني غير صحيح أو كلمة المرور", 401));

  // everything is okay,send to cliant
  createSendToken(user, 200, res);
});

export const logout = (req, res) => {
  //cookies
  const cookieOptions = {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  };
  res.cookie("jwt", "logout", cookieOptions);
  res.status(200).json({
    status: "success",
  });
};

export const protect = catchAsync(async (req, res, next) => {
  // get and check token exist
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("تم رفض الوصول، الرجاء التأكد من تسجيل الدخول ", 401)
    );
  }

  // verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // check user still exist
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(new AppError("انتهت صلاحية الرمز المميز للمستخدم ", 401));
  }

  // check password after token issued
  if (currentUser.passwordChangedAfter(decoded.iat)) {
    return next(
      new AppError(
        "المستخدم مؤخرا قام بتغيير كلمة المرور! الرجاء المحاولة مرة أخرى",
        401
      )
    );
  }

  //GRANT ACESS
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

export const isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      const currentAdmin = await Admin.findById(decoded.id);

      if (!currentAdmin) {
        return next();
      }

      res.locals.admin = currentAdmin;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

export const forgotPassword = catchAsync(async (req, res, next) => {
  //get user based on posted email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("لا يوجد مستخدم في هذا البريد الإلكتروني.", 404));
  }

  // generate random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  try {
    // sned it to user email
    const resetURL = `${req.protocol}://${req.get(
      "http://localhost:3000"
    )}/resetPassword/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: "success",
      message: "تم ارسال الرمز إلى البريد الإلكتروني",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        "حدث خطأ في إرسال البريد الإلكتروني. حاول مرة أخرى في وقت لاحق!"
      ),
      500
    );
  }
});

export const resetPassword = catchAsync(async (req, res, next) => {
  //get user based on token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  //If token has not expired, and there is user, set the new password
  if (!user) {
    return next(
      new AppError("الرمز المميز غير صالح أو انتهت مدة صلاحيته", 400)
    );
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // Log the user in, send JWT
  createSendToken(user, 200, res);
});

export const updatePassword = catchAsync(async (req, res, next) => {
  //get user
  const user = await User.findById(req.user.id).select("+password");

  //check if posted current password correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("كلمة المرور الحالية غير صحيحة!", 401));
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  await user.save();

  //log in and send jwt
  createSendToken(user, 200, res);
});

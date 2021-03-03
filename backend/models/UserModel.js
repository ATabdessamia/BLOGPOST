import crypto from "crypto";
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "من فضلك أخبرنا باسمك الاول"],
  },
  lastName: {
    type: String,
    required: [true, "من فضلك أخبرنا باسم العائلة"],
  },
  email: {
    type: String,
    required: [true, "يرجى تقديم البريد الإلكتروني الخاص بك"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "يرجى تقديم بريد إلكتروني صالح"],
  },
  photo: {
    type: String,
    default: "avatar.svg",
  },
  password: {
    type: String,
    required: [true, "يرجى تقديم كلمة مرور"],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "الرجاء تأكيد كلمة المرور"],
    validate: {
      validator: function (pwd) {
        return pwd === this.password;
      },
      message: "كلمات المرور ليست هي نفسها",
    },
  },
  passwordChangeAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre("save", async function (next) {
  // run this func only when password isModify
  if (!this.isModified("password")) return next();

  //encypt pwd
  this.password = await bcrypt.hash(this.password, 12);

  // dont add it in database
  this.confirmPassword = undefined;

  next();
});

userSchema.pre("save", function (next) {
  //if password modified or new user
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangeAt = Date.now() - 1000;
  next();
});

// procedures
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.passwordChangedAfter = function (JWTTimeSpan) {
  // password  has been changed
  if (this.passwordChangeAt) {
    const passwordChaneSpan = parseInt(
      this.passwordChangeAt.getTime() / 1000,
      10
    );

    return JWTTimeSpan < passwordChaneSpan;
  }

  //no password changes
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// exec
const User = mongoose.model("User", userSchema);

export default User;

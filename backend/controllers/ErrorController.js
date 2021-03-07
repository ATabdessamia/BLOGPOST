import AppError from "../utilits/AppErrors.js";

// invalid database ID
const handelCastErrDB = (err) => {
  const msg = `.${err.value}:${err.path} غير صالح`;
  return new AppError(msg, 400);
};

// Duplicate same database value unique
const handelDuplicateFieldDB = (err) => {
  // eslint-disable-next-line prefer-destructuring
  const value = err.errmsg.match(/(["'])(?:\\.|[^\\])*?\1/)[0];

  const msg = `!الرجاء استخدام قيمة أخرى,
    قيمة الحقل المكررة:${value}
  `;
  return new AppError(msg, 400);
};

// mongoos validation
const handleValidationErrDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const msg = `${errors.join(". ")} بيانات إدخال غير صحيحة`;
  return new AppError(msg, 400);
};

// JWT handlers
const handlerJWTerror = () =>
  new AppError("الرمز المميز غير صالح، الرجاء المحاولة مرة أخرى", 401);

const handlerJWTexpiredError = () =>
  new AppError(
    "انتهت صلاحية الرمز المميز الخاص بك، الرجاء المحاولة مرة أخرى",
    401
  );

// Controle Errors
const sendErrorDev = (err, req, res) => {
  //API
  if (req.originalUrl.startsWith("/")) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  //RENDERED WEBSITE
  console.error("ERROR 💥", err);
  return res.status(err.statusCode).render("error", {
    title: "!حدث خطأ ما",
    msg: err.message,
  });
};

const sendErrorProd = (err, req, res) => {
  //API
  if (req.originalUrl.startsWith("/")) {
    // generic msg
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
    //log err
    console.error("ERROR", err);
    // programming error or unknown error
    return res.status(500).json({
      status: err.status,
      message: "!حدث خطأ ما",
    });
  }

  //RENDERED WEBSITE
  if (err.isOperational) {
    return res.status(err.statusCode).render("error", {
      title: "!حدث خطأ ما",
      msg: err.message,
    });
  }

  console.error("ERROR 💥", err);
  return res.status(err.statusCode).render("error", {
    title: "!حدث خطأ ما",
    msg: ".الرجاء المحاولة مرة أخرى لاحقاً",
  });
};

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === "production") {
    if (err.name === "CastError") err = handelCastErrDB(err);
    if (err.code === 11000) err = handelDuplicateFieldDB(err);
    if (err.name === "ValidationError") err = handleValidationErrDB(err);
    if (err.name === "JsonWebTokenError") err = handlerJWTerror();
    if (err.name === "TokenExpiredError") err = handlerJWTexpiredError();
    sendErrorProd(err, req, res);
  }
};

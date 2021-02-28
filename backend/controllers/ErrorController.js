import AppError from "../utilits/AppErrors.js";

// invalid database ID
const handelCastErrDB = (err) => {
  const msg = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(msg, 400);
};

// Duplicate same database value unique
const handelDuplicateFieldDB = (err) => {
  // eslint-disable-next-line prefer-destructuring
  const value = err.errmsg.match(/(["'])(?:\\.|[^\\])*?\1/)[0];

  const msg = `Duplicate faild value: ${value}. Please use another value! `;
  return new AppError(msg, 400);
};

// mongoos validation
const handleValidationErrDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const msg = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(msg, 400);
};

// JWT handlers
const handlerJWTerror = () =>
  new AppError("Invalid tokin,Please try again", 401);

const handlerJWTexpiredError = () =>
  new AppError("Your tokin has expired,Please try again", 401);

// Controle Errors
const sendErrorDev = (err, req, res) => {
  //API
  if (req.originalUrl.startsWith("/api")) {
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
    title: "Something went wrong!",
    msg: err.message,
  });
};

const sendErrorProd = (err, req, res) => {
  //API
  if (req.originalUrl.startsWith("/api")) {
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
      message: "Somthing goes wrong /:",
    });
  }

  //RENDERED WEBSITE
  if (err.isOperational) {
    return res.status(err.statusCode).render("error", {
      title: "Something went wrong!",
      msg: err.message,
    });
  }

  console.error("ERROR 💥", err);
  return res.status(err.statusCode).render("error", {
    title: "Something went wrong!",
    msg: "Please try again later.",
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

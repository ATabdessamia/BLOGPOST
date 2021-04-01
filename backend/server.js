import express from "express";
import dotenv from "dotenv";
import cookie from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import globalErrorsHandler from "./controllers/ErrorController.js";
import connection from "./utilits/DataBase.js";
import AppError from "./utilits/AppErrors.js";
import postRoutes from "./routes/PostRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import commentRoutes from "./routes/CommentRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// coder exception
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught Rejection Shutting down...");
  process.exit(1);
});

dotenv.config();

connection();

const app = express();

app.use(express.static(path.join(__dirname, "../frontend/public")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookie());

app.use("/auths", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

// HanderlErrors for routes
app.all("*", (req, res, next) => {
  const err = new AppError(
    `Cant't find ${req.originalUrl} on this server!`,
    404
  );
  next(err);
});

// Global handler (middl)
app.use(globalErrorsHandler);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});

// outside express exception
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

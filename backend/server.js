import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./Config/db.js";
import { errorHandler } from "./Middleware/errorMiddleware.js";
import { notFound } from "./Middleware/errorMiddleware.js";
import userRoutes from "./Routes/userRoutes.js";
import projectRoutes from "./Routes/projectRoutes.js";
dotenv.config();
connectDB();
const app = express();

app.use(express.json());
// app.use(express.static(__dirname + "/uploads"));
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => {
  res.send("api is running ....");
});
app.use("/user", userRoutes);
app.use("/project", projectRoutes);
app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(`server is running on ${port} in ${process.env.NODE_ENV} mode `)
);

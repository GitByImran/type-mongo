import express, { request, response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import Course from "./schema/course";

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("server connected");
});

app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch {
    res.status(500).send("internal server error");
  }
});

mongoose
  .connect(process.env.DB_URI || "", { dbName: "academics" })
  .then(() => {
    app.listen(port, () => {
      console.log(`server is listening from port http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.error("Unable to connect");
  });

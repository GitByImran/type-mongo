import express, { request, response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import courseRoutes from "./routes/courseRoutes";
import errorHandler from "./middleware/errorHandler";
import gotoCourse from "./controller/course";

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("server connected");
});

app.get("/courses", gotoCourse);

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

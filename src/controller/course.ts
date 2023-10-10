import { Request, Response } from "express";
import Course from "../schema/course";

const gotoCourse = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
};

export default gotoCourse;
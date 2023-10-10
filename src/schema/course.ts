import mongoose from "mongoose";
const { Schema } = mongoose;

const courseSchema = new Schema({
  id: Number,
  teacher: {
    name: String,
    experience: String,
    position: String,
  },
  course: {
    name: String,
    duration: String,
  },
  schedule: {
    weekly_class_day: String,
    weekly_class_hour: String,
  },
  enrolled_students: Number,
  playlist: [String],
  courseReview: Number,
  courseFeedback: String,
  coursePrice: Number,
});

const Course = mongoose.model("Courses", courseSchema);
export default Course;

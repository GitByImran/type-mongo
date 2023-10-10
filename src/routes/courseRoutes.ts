import { Router } from "express";
import gotoCourse from "../controller/course";

const router: Router = Router();

router.get("/", gotoCourse);

export default router;

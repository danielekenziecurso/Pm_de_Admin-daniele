import { Request, Response } from "express";
import { Course, CourseList } from "../../interfaces/courses.interface";
import { coursesReadService } from "../../services/course/coursesRead.service";

const coursesReadController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = req.headers.authorization!;
  const coursesList: Course[] = await coursesReadService(token);
  return res.status(200).json(coursesList);
};

export { coursesReadController };

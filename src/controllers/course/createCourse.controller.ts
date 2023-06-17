import { Request, Response } from "express";
import { Course, CourseCreate } from "../../interfaces/courses.interface";
import { createCourseService } from "../../services/course/createCourse.service";

const createCourseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const courseData: CourseCreate = req.body;

  const newCourse: Course = await createCourseService(courseData);

  return res.status(201).json(newCourse);
};

export { createCourseController };

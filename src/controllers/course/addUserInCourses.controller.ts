import { Request, Response } from "express";
import { addUserInCoursesService } from "../../services/course/addUserInCourses.service";

const addUserInCourseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { userId, courseId } = req.params;

  const addUserCourses = await addUserInCoursesService(userId, courseId);

  return res.status(201).json(addUserCourses);
};

export { addUserInCourseController };

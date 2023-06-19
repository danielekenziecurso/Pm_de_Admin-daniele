import { Request, Response } from "express";
import { addUserInCoursesService } from "../../services/course/addUserInCourses.service";

const addUserInCourseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { userId, courseId} = req.params;
  const { admin } = res.locals.decoded;
   
  const addUserCourses = await addUserInCoursesService(userId, courseId, admin);

  return res.status(201).json(addUserCourses);
};

export { addUserInCourseController };

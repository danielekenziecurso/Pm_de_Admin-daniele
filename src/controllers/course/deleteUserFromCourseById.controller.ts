import { Request, Response } from "express";
import { deleteUserFromCourseByIdService } from "../../services/course/deleteUserFromCourseById.service";

const deleteUserFromCourseByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { userId, courseId } = req.params;

  await deleteUserFromCourseByIdService(userId, courseId);

  return res.status(204).json();
};

export { deleteUserFromCourseByIdController };

import { Request, Response } from "express";
import { courseGetByIdService } from "../../services/course/courseGetById.service";

const courseGetByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const courseId: string = req.params.id;

  const courseUsers = await courseGetByIdService(courseId);

  return res.status(200).json(courseUsers);
};

export { courseGetByIdController };

import { Request, Response } from "express";
import { userGetByIdService } from "../../services/user/userGetById.service";

const userGetByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const user = await userGetByIdService(parseInt(id));

  return res.status(200).json(user);
};

export { userGetByIdController };

import { Request, Response } from "express";
import { createUserService } from "../../services/user/createuser.services";
import { UserCreate, UserReturn } from "../../interfaces/users.interface";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {

  const newUser: UserReturn = await createUserService(req.body);

  return res.status(201).json(newUser);
};

export { createUserController };

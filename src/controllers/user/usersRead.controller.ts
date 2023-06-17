import { Request, Response } from "express";
import { UserList } from "../../interfaces/users.interface";
import { usersReadService } from "../../services/user/usersRead.service";

const usersReadController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = req.headers.authorization!;
  const users: UserList = await usersReadService(token);
  return res.status(200).json(users);
};

export { usersReadController };

import { Request, Response } from "express";
import { SessionReturn } from "../../interfaces/session.interface";
import { createSession } from "../../services/session/session.service";
const createSessionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { validated } = res.locals;
  const token: SessionReturn = await createSession(validated);

  return res.status(200).json(token);
};

export { createSessionController };

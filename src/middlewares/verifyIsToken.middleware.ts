import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Unauthorized } from "../error";

const verifyTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  let authorization = req.headers.authorization;

  if (!authorization){
      throw new Unauthorized("Missing bearer token", 401);
  }

  authorization = authorization.split(" ")[1];

  verify(authorization, process.env.SECRET_KEY!, (err, decoded: any) => {
    if (err) {
      throw new Unauthorized(err.message, 401);
    }
    res.locals = { ...res.locals, decoded };
    next();
  });
};

export { verifyTokenMiddleware };

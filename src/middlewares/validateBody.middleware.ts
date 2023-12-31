import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validateBodyMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const validated = schema.parse(req.body);
    req.body = validated

    return next()
  };

export { validateBodyMiddleware };

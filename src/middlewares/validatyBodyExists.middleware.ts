import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

const validateBodyMiddleware =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): any => {
    try {
      const validated = schema.parse(req.body);
      res.locals = validated;

      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorResponse = {
          message: "Tentando cadastrar com um body inválido:",
          data: req.body,
          errors: error.errors.map((err) => err.message),
        };
        return res.status(400).json(errorResponse);
      } else {
        return res.status(500).json({ message: "Erro interno do servidor" });
      }
    }
  };

export { validateBodyMiddleware };

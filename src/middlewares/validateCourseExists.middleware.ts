import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { QueryResult } from "pg";
import { client } from "../database";

const validateCourseExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const courseId = req.params.id;
  if (!courseId) {
    return next();
  }
  const query: QueryResult = await client.query(
    'SELECT * FROM "courses" WHERE "id" = $1;',
    [courseId]
  );

  if (query.rowCount === 0) {
    throw new AppError("No course found", 404);
  }

  next();
};

export { validateCourseExistsMiddleware };

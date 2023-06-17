import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { AppError } from "../error";

const verifyUserAndCourseExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, courseId } = req.params;

  const userQuery = await client.query('SELECT * FROM "users" WHERE id = $1', [
    userId,
  ]);
  const userExists = userQuery.rowCount > 0;

  const courseQuery = await client.query(
    'SELECT * FROM "courses" WHERE id = $1',
    [courseId]
  );
  const courseExists = courseQuery.rowCount > 0;

  if (!userExists) {
    throw new AppError("User/course not found", 404);
  }
  if (!courseExists) {
    throw new AppError("User/course not found", 404);
  }

  next();
};

export { verifyUserAndCourseExistsMiddleware };

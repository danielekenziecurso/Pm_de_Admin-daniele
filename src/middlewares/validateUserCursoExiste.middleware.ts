import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../database";
import { AppError } from "../error";

const validateUserCursoExisteMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const courseId = req.params.id;
    const userId = req.params.id
    if (!courseId) {
      return next();
    }

    const query: QueryResult = await client.query(
      'SELECT * FROM "userCourses" WHERE "userId" = $1;',
      [userId]
    );
    if (query.rows.length === 0) {
      throw new AppError("No course found", 404);
    }
  
    next();
  };
  
  export { validateUserCursoExisteMiddleware };
  
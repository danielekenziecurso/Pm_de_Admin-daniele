import { QueryConfig, QueryResult } from "pg";
import { NextFunction, Request, Response } from "express";
import { User, UserCreate } from "../interfaces/users.interface";
import { client } from "../database";
import { Conflict } from "../error";

const UserValidetyEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userEmail: UserCreate = req.body;

  const queryString: string = `
          SELECT
              * 
          FROM
              "users"
          WHERE 
              "email" = $1;
      `;
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [userEmail.email],
  };

  const queryResult: QueryResult<User> = await client.query(queryConfig);

  if (queryResult.rowCount > 0) {
    throw new Conflict("Email already registered", 409);
  }
  res.locals.developers = queryResult.rows;
  return next();
};

export { UserValidetyEmailExistsMiddleware };

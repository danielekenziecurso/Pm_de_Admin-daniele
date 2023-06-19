import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../../database";
import { UserCreate, UserReturn } from "../../interfaces/users.interface";
import { hash } from "bcryptjs";

const createUserService = async (payload: UserCreate): Promise<UserReturn> => {
  payload.password = await hash(payload.password, 10);
  const formatString: string = format(
    `
      INSERT INTO
             "users"
           (%I)        
      VALUES
           (%L) 
         RETURNING "id", "name", "email", "admin";;
    `,
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: QueryResult<UserReturn> = await client.query(formatString);

  return queryResult.rows[0];
};

export { createUserService };

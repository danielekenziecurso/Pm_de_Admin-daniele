import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../../database";
import { UserCreate, UserReturn } from "../../interfaces/users.interface";
import { hash } from "bcryptjs";
import { userWithoutPassword } from "../../schemas/user.schema";

const createUserService = async (payload: UserCreate): Promise<UserReturn> => {
  payload.password = await hash(payload.password, 10);
  const formatString: string = format(
    `
      INSERT INTO
             "users"
           (%I)        
      VALUES
           (%L) 
         RETURNING *;
    `,
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: QueryResult<UserReturn> = await client.query(formatString);

  return userWithoutPassword.parse(queryResult.rows[0]);
};

export { createUserService };

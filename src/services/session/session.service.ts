import { QueryResult } from "pg";
import { CreateSession, SessionReturn } from "../../interfaces/session.interface";
import { client } from "../../database";
import { NotFound, Unauthorized } from "../../error";
import { User } from "../../interfaces/users.interface";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

const createSession = async (payload: CreateSession): Promise<SessionReturn> => {
  const query: QueryResult = await client.query(
    'SELECT * FROM "users" WHERE "email" = $1',
    [payload.email]
  );

  if (query.rowCount === 0) {
    throw new NotFound("Wrong email/password", 404);
  }

  const user: User = query.rows[0];
  const samePassword: boolean = await compare(payload.password, user.password);
console.log(samePassword)
  if (!samePassword) {
    throw new Unauthorized("Wrong email/password", 401);
  }

  const token: string = sign(
    { email: user.email, admin: user.admin },
    process.env.SECRET_KEY!,
    { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export { createSession };

import { z } from "zod";
import { session } from "../schemas/session.schema";

type CreateSession = z.infer<typeof session>;
type SessionReturn = {
  token: string;
};

export { CreateSession, SessionReturn };

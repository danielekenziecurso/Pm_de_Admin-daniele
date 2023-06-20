import { z } from "zod";
import { createSession } from "../schemas/session.schema";

type CreateSession = z.infer<typeof createSession>;

type SessionReturn = {
  token: string;
};

export { CreateSession, SessionReturn };

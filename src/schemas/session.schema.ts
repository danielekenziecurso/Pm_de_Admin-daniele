import { z } from "zod";

const createSession = z.object({
  email: z.string().max(50),
  password: z.string().max(120),
});
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().max(120),
});

export { createSession, loginSchema };

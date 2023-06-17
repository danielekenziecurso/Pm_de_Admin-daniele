import { z } from "zod";
const session = z.object({
  email: z.string().max(50),
  password: z.string().max(120),
});

export { session };

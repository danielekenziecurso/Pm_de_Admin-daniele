import { z } from "zod";

const user = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  email: z.string().email().max(50),
  password: z.string().max(120),
  admin: z.boolean(),
});

const userCreate = user.omit({ id: true });
const userReturn = user.omit({ password: true });
const userList = userReturn.array();
const userWithoutPassword = user.omit({
  password: true,
});

export { user, userCreate, userReturn, userList, userWithoutPassword };

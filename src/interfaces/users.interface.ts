import { z } from "zod";
import { user, userCreate, userList, userReturn } from "../schemas/user.schema";

type UserCreate = z.infer<typeof userCreate>;
type User = z.infer<typeof user>;
type UserReturn = z.infer<typeof userReturn>;
type UserList = z.infer<typeof userList>;

export { UserCreate, User, UserReturn, UserList };

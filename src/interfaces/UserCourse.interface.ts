import { type } from "os";
import { QueryResult } from "pg";
import { z } from "zod";
import { userCourse } from "../schemas/userCourse.schema";

type UserCourse = z.infer<typeof userCourse>;

export { UserCourse };

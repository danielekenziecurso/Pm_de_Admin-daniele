import { z } from "zod";
import { course, courseCreate } from "../schemas/course.schema";

type Course = z.infer<typeof course>;
type CourseCreate = z.infer<typeof courseCreate>;
type CourseReturn = z.infer<typeof course>;
type CourseList = z.infer<typeof course>;

export { Course, CourseCreate, CourseReturn, CourseList };

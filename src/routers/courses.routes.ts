import { Router } from "express";
import { createCourseController } from "../controllers/course/createCourse.controller";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { courseCreate } from "../schemas/course.schema";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { validateAdminMiddleware } from "../middlewares/validateAdmin.middleware";
import { coursesReadController } from "../controllers/course/coursesRead.cotroller";
import { addUserInCourseController } from "../controllers/course/addUserInCourses.controller";
import { verifyUserAndCourseExistsMiddleware } from "../middlewares/verifyUserAndCourseExists.middleware";
import { deleteUserFromCourseByIdController } from "../controllers/course/deleteUserFromCourseById.controller";
import { courseGetByIdController } from "../controllers/course/courseGetById.controller";

const clientCourses: Router = Router();

clientCourses.post(
  "",
  verifyTokenMiddleware,
  validateAdminMiddleware,
  validateBodyMiddleware(courseCreate),
  createCourseController
);
clientCourses.get(
  "",
  verifyTokenMiddleware,
  validateAdminMiddleware,
  coursesReadController
);
clientCourses.post(
  "/:courseId/users/:userId",
  verifyTokenMiddleware,
  validateAdminMiddleware,
  verifyUserAndCourseExistsMiddleware,
  addUserInCourseController
);
clientCourses.delete(
  "/:courseId/users/:userId",
  verifyTokenMiddleware,
  validateAdminMiddleware,
  verifyUserAndCourseExistsMiddleware,
  deleteUserFromCourseByIdController
);
clientCourses.get(
  "/:id/users",
  verifyTokenMiddleware,
  validateAdminMiddleware,
  courseGetByIdController
);

export { clientCourses };

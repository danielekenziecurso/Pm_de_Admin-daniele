import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { UserValidetyEmailExistsMiddleware } from "../middlewares/UserValidetyEmailExists.middleware";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { userCreate } from "../schemas/user.schema";
import { usersReadController } from "../controllers/user/usersRead.controller";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { verifyUserPermissionMiddleware } from "../middlewares/verifyUserPermission.middleware";
import { userGetByIdController } from "../controllers/user/userGetById.controller";
import { validateCourseExistsMiddleware } from "../middlewares/validateCourseExists.middleware";
import { validateAdminMiddleware } from "../middlewares/validateAdmin.middleware";

const clientUsers: Router = Router();

clientUsers.post(
  "",
  validateBodyMiddleware(userCreate),
  UserValidetyEmailExistsMiddleware,
  createUserController
);
clientUsers.get(
  "",
  verifyTokenMiddleware,
  validateAdminMiddleware,
  verifyUserPermissionMiddleware,
  usersReadController
);
clientUsers.get(
  "/:id/courses",
  verifyTokenMiddleware,
  verifyUserPermissionMiddleware,
  validateAdminMiddleware,
  validateCourseExistsMiddleware,
  userGetByIdController
);

export { clientUsers };

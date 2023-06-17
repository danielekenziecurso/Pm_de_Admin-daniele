import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { createSessionController } from "../controllers/session/createSession.controller";
import { session } from "../schemas/session.schema";

const sessionRouter: Router = Router();

sessionRouter.post(
  "",
  validateBodyMiddleware(session),
  createSessionController
);

export { sessionRouter };

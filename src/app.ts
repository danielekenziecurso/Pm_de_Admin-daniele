import express, { Application } from "express";
import "express-async-errors";
import "dotenv/config";
import { clientUsers } from "./routers/users.routers";
import { clientCourses } from "./routers/courses.routes";
import handleError from "./middlewares/handleErrors.middlewares";
import { sessionRouter } from "./routers/session.router";

const app: Application = express();
app.use(express.json());

app.use("/users", clientUsers);

app.use("/login", sessionRouter);

app.use("/courses", clientCourses);

app.use(handleError);

export default app;

import { QueryResult } from "pg";
import { client } from "../../database";
import { UserCourse } from "../../interfaces/UserCourse.interface";
import { AppError } from "../../error";

const userGetByIdService = async (id: number) => {
  const queryTemplate: string = `
      SELECT
         "c".id AS "courseId",
         "c".name AS "courseName",
         "c".description AS "courseDescription",
         "uc"."active" AS "userActiveInCourse",
        "u"."id" AS "userId",
         "u"."name" AS "userName"
      FROM
        "users" AS "u"
      LEFT JOIN
        "userCourses" AS "uc" ON "u".id = "uc"."userId"
      LEFT JOIN
        "courses" AS "c" ON "c".id = "uc"."courseId"
      WHERE
       "u".id = $1;

    `;
  const queryResult = await client.query(
    queryTemplate,
    [id]
  );

  const courseQuery = await client.query(
    'SELECT * FROM "userCourses" WHERE id = $1',
    [id]
  );
  const courseViculado = courseQuery.rowCount > 0;

  if (!courseViculado) {
    throw new AppError("No course found", 404);
  }
  
  return queryResult.rows;
};

export { userGetByIdService };

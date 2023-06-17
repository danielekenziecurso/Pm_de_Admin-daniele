import { client } from "../../database";
import { UserCourse } from "../../interfaces/UserCourse.interface";

const courseGetByIdService = async (
  courseId: string
): Promise<UserCourse[]> => {
  const queryString: string = `
         SELECT "users".id AS "userId", 
                "users".name AS "userName", 
                "users".email AS "userEmail", 
                "courses".id AS "courseId", 
                "courses".name AS "courseName", 
                "courses".description AS "courseDescription"
         FROM 
               "user_courses"
         JOIN 
              "users" ON "users".id = "userCourses"."userId"
         JOIN 
               "courses" ON "courses".id = "userCourses"."courseId"
         WHERE 
             "courses".id = $1;
  `;

  const queryResult = await client.query(queryString, [courseId]);
  const courseUsers: UserCourse[] = queryResult.rows;

  return courseUsers;
};

export { courseGetByIdService };

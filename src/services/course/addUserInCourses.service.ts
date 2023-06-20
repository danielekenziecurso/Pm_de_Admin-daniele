import { client } from "../../database";
import { AppError } from "../../error";


const addUserInCoursesService = async (
  userId: string,
  courseId: string,
  isAdmin: boolean
): Promise<object> => {
  if (!isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }
  const queryString: string = `
         INSERT INTO
                "userCourses"
                ("userId", "courseId")
         VALUES ($1, $2)
        RETURNING *;
    `;
  await client.query(queryString, [userId, courseId]);
  const message: any = "message"

  return message;
};

export { addUserInCoursesService };

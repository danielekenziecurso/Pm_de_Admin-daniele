import { client } from "../../database";

const addUserInCoursesService = async (
  userId: string,
  courseId: string
): Promise<object> => {
  const queryString: string = `
         INSERT INTO
                "userCourses"
                ("userId", "courseId")
         VALUES ($1, $2)
        RETURNING *;
    `;
  await client.query(queryString, [userId, courseId]);

  return { messagem: "User successfully vinculed to course" };
};

export { addUserInCoursesService };

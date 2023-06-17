import { client } from "../../database";

const deleteUserFromCourseByIdService = async (
  userId: string,
  courseId: string
): Promise<void> => {
  const queryString: string = `
          UPDATE 
               "userCourses"
          SET
          active = false
          WHERE 
             "userId" = $1
          AND
            "courseId" = $2;
    `;

  await client.query(queryString, [userId, courseId]);
};

export { deleteUserFromCourseByIdService };

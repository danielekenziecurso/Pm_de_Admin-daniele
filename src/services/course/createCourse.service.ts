import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../../database";
import { Course, CourseCreate } from "../../interfaces/courses.interface";

const createCourseService = async (
  courseData: CourseCreate
): Promise<Course> => {
  const formatString: string = format(
    `
      INSERT INTO
             "courses"
           (%I)        
      VALUES
           (%L) 
         RETURNING *;
    `,
    Object.keys(courseData),
    Object.values(courseData)
  );
  const queryResult: QueryResult<Course> = await client.query(formatString);

  return queryResult.rows[0];
};

export { createCourseService };

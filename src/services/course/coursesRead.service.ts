import { QueryResult } from "pg";
import { client } from "../../database";
import { Course } from "../../interfaces/courses.interface";

const coursesReadService = async (token: string): Promise<Course[]> => {
  const query: QueryResult = await client.query('SELECT * FROM "courses";');
  return query.rows;
};

export { coursesReadService };

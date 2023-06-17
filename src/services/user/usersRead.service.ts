import { QueryResult } from "pg";
import { client } from "../../database";
import { UserList } from "../../interfaces/users.interface";
import { userList } from "../../schemas/user.schema";

const usersReadService = async (token: string): Promise<UserList> => {
  const query: QueryResult = await client.query('SELECT * FROM "users";');
  return userList.parse(query.rows);
};

export { usersReadService };

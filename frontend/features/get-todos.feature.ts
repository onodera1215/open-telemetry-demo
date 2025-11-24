import { getServerClient } from "@/graphql/server-client";
import { graphql } from "@/graphql/documents";
import { Todo } from "@/graphql/documents/graphql";

const GET_TODOS_QUERY = graphql(`
  query GetTodos {
    todos {
      id
      title
      description
      completed
      createdAt
      updatedAt
    }
  }
`);
export default async function getTodosFeature(): Promise<{
  success: boolean;
  todos: Todo[];
}> {
  const client = await getServerClient();
  const result = await client
    .query<{ todos: Todo[] }>(GET_TODOS_QUERY, {})
    .toPromise();
  if (!result) {
    return { success: false, todos: [] };
  }
  if (result.error) {
    console.error("Error fetching todos:", result.error);
    return { success: false, todos: [] };
  }
  return !result.data
    ? { success: false, todos: [] }
    : { success: true, todos: result.data.todos };
}

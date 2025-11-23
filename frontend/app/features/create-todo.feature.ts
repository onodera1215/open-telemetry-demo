import { getServerClient } from "@/graphql/server-client";
import { graphql } from "@/graphql/documents";
import { Todo, TodoInput } from "@/graphql/documents/graphql";

const CREATE_TODO_MUTATION = graphql(`
  mutation CreateTodoMutation($input: TodoInput!) {
    createTodo(input: $input) {
      id
      title
      description
      completed
      createdAt
      updatedAt
    }
  }
`);
export default async function createTodoFeature(input: TodoInput): Promise<{
  success: boolean;
  todo: Todo | null;
}> {
  const client = await getServerClient();
  const result = await client
    .mutation<{ createTodo: Todo }>(CREATE_TODO_MUTATION, { input })
    .toPromise();
  if (!result) {
    return { success: false, todo: null };
  }
  if (result.error) {
    console.error("Error creating todo:", result.error);
    return { success: false, todo: null };
  }
  return !result.data
    ? { success: false, todo: null }
    : { success: true, todo: result.data.createTodo };
}

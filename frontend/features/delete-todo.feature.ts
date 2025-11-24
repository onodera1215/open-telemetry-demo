import { getServerClient } from "@/graphql/server-client";
import { graphql } from "@/graphql/documents";
import { Todo } from "@/graphql/documents/graphql";

const DELETE_TODO_MUTATION = graphql(`
  mutation DeleteTodoMutation($id: Int!) {
    deleteTodo(id: $id) {
      id
      title
      description
      completed
      createdAt
      updatedAt
    }
  }
`);

export default async function deleteTodoFeature(id: number): Promise<{
  success: boolean;
  todo: Todo | null;
}> {
  const client = await getServerClient();
  const result = await client
    .mutation<{ deleteTodo: Todo }>(DELETE_TODO_MUTATION, { id })
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
    : { success: true, todo: result.data.deleteTodo };
}

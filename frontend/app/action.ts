"use server";

import { graphql } from "@/graphql/documents";
import {
  CreateTodoMutationMutation,
  CreateTodoMutationMutationVariables,
  Todo,
} from "@/graphql/documents/graphql";
import { TypedDocumentNode } from "urql";

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
`) as TypedDocumentNode<
  CreateTodoMutationMutation,
  CreateTodoMutationMutationVariables
>;

export default async function createTodoAction(
  prevState: Todo[],
  formData: FormData
): Promise<Todo[]> {
  const result = await urqlServerMutationClient<
    CreateTodoMutationMutation,
    CreateTodoMutationMutationVariables
  >({
    mutation: CREATE_TODO_MUTATION,
    variables: {
      input: {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
      },
    },
  });
  if (result.data) {
    return [...prevState, result.data.createTodo];
  }
  return prevState;
}

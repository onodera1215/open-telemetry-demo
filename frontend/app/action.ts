"use server";

import { Todo } from "@/graphql/documents/graphql";
import createTodoFeature from "./features/create-todo.feature";

export default async function createTodoAction(
  prevState: Todo[],
  formData: FormData
): Promise<Todo[]> {
  const input = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  };
  const result = await createTodoFeature(input);
  if (result.success && result.todo) {
    return [...prevState, result.todo];
  }
  return prevState;
}

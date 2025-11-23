"use server";

import { Todo } from "@/graphql/documents/graphql";

export default async function createTodoAction(
  prevState: Todo[],
  formData: FormData
): Promise<Todo[]> {
  console.debug("formData: ", formData);
  return [];
}

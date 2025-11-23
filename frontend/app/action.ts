"use server";

import { Todo } from "@/graphql/documents/graphql";
import createTodoFeature from "./features/create-todo.feature";
import deleteTodoFeature from "./features/delete-todo.feature";

enum ActionType {
  CREATE = "create",
  DELETE = "delete",
}

export default async function createTodoAction(
  prevState: Todo[],
  formData: FormData
): Promise<Todo[]> {
  // 状態変更の分岐
  const action = formData.get("action") as ActionType;

  // 作成アクション
  if (action === ActionType.CREATE) {
    const input = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    };
    return await dispatchCreateAction(input, prevState);
  }

  // 削除アクション
  if (action === ActionType.DELETE) {
    const id = parseInt(formData.get("id") as string, 10);
    return await dispatchDeleteAction(id, prevState);
  }

  // デフォルトは状態を変更しない
  return prevState;
}

async function dispatchCreateAction(
  { title, description }: { title: string; description: string },
  prevState: Todo[]
): Promise<Todo[]> {
  const result = await createTodoFeature({ title, description });
  if (result.success && result.todo) {
    return [result.todo, ...prevState];
  }
  return prevState;
}

async function dispatchDeleteAction(
  id: number,
  prevState: Todo[]
): Promise<Todo[]> {
  await deleteTodoFeature(id);
  return prevState.filter((todo) => todo.id !== id);
}

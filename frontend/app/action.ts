"use server";

import { Todo } from "@/graphql/documents/graphql";
import createTodoFeature from "../features/create-todo.feature";
import deleteTodoFeature from "../features/delete-todo.feature";
import { trace } from "@opentelemetry/api";
import {
  OTLP_SERVICE_NAME,
  OTLP_SERVICE_VERSION,
  withSpan,
} from "@/instrumentation";

enum ActionType {
  CREATE = "create",
  DELETE = "delete",
}

const tracer = trace.getTracer(OTLP_SERVICE_NAME, OTLP_SERVICE_VERSION);

async function _action(prevState: Todo[], formData: FormData): Promise<Todo[]> {
  // 状態変更の分岐
  const action = formData.get("action") as ActionType;

  // 作成アクション
  if (action === ActionType.CREATE) {
    const input = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    };
    return await createActionHandler(input, prevState);
  }

  // 削除アクション
  if (action === ActionType.DELETE) {
    const id = parseInt(formData.get("id") as string, 10);
    return await deleteActionHandler(id, prevState);
  }

  // デフォルトは状態を変更しない
  return prevState;
}
export const tracedAction = withSpan(tracer, "server-actions", _action);

const _create = async (
  { title, description }: { title: string; description: string },
  prevState: Todo[]
): Promise<Todo[]> => {
  const result = await createTodoFeature({ title, description });
  if (result.success && result.todo) {
    return [result.todo, ...prevState];
  }
  return prevState;
};
const createActionHandler = withSpan(tracer, "create-todo", _create);

const _delete = async (id: number, prevState: Todo[]): Promise<Todo[]> => {
  await deleteTodoFeature(id);
  return prevState.filter((todo) => todo.id !== id);
};
const deleteActionHandler = withSpan(tracer, "delete-todo", _delete);

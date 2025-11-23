
"use client";
import TodoInputCard from "../molecules/TodoInputCard";
import { useActionState } from "react";
import createTodoAction from "@/app/action";
import { Todo } from "@/graphql/documents/graphql";
import TodoDisplayCard from "../molecules/TodoDisplayCard";

export default function TodoForm({ todos }: { todos: Todo[] }) {
  const [state, action] = useActionState(createTodoAction, todos);
  return (
    <section className="container mx-auto p-4">
      <h1 className="mx-auto text-2xl font-bold mb-4 text-center">
        Your Tasks.
      </h1>
      <form action={action}>
        <input type="hidden" name="action" value="create" />
        <TodoInputCard />
      </form>
      {state.map(todo => (
        <div className="my-2" key={todo.id}>
          <form action={action}>
            <input type="hidden" name="action" value="delete" />
            <TodoDisplayCard todo={todo} />
          </form>
        </div>
      ))}
    </section>
  );
}

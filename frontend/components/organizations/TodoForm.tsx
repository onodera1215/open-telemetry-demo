
"use client";
import TodoInputCard from "../molecules/TodoInputCard";
import TodoListCard from "../molecules/TodoListCard";
import { useActionState } from "react";
import createTodoAction from "@/app/action";
import { Todo } from "@/graphql/documents/graphql";

export default function TodoForm({ todos }: { todos: Todo[] }) {
  const [state, action] = useActionState(createTodoAction, todos);
  return (
    <section className="container mx-auto p-4">
      <h1 className="mx-auto text-2xl font-bold mb-4 text-center">
        Your Tasks.
      </h1>
      <form action={action}>
        <TodoInputCard />
      </form>
      <div>
        <TodoListCard todos={state} />
      </div>
    </section>
  );
}

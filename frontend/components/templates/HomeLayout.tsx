import { Todo } from "@/graphql/documents/graphql";
import TodoForm from "../organizations/TodoForm";

export default async function HomeLayout({ todos }: { todos: Todo[] }) {
  return <TodoForm todos={todos} />;
}

import { Todo } from "@/graphql/documents/graphql";
import TodoDisplayCard from "./TodoDisplayCard";

export default function TodoListCard({ todos }: { todos: Todo[] }) {
  return todos.map(todo => (
    <TodoDisplayCard key={todo.id} todo={todo} />
  ))
}

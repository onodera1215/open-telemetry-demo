import { Todo } from "@/graphql/documents/graphql";
import { BasicCard } from "../atom/BasicCard";
import { InputArea } from "../atom/BasicInputArea";
import TextArea from "../atom/BasicTextArea";

export default function TodoDisplayCard({ todo }: { todo: Todo }) {
  return (
    <div className="max-w-md mx-auto">
      <BasicCard>
        <div className="mb-1">
          <InputArea disabled={true} defaultValue={todo.title} />
        </div>
        <TextArea disabled={true} defaultValue={todo.description || ""} />
      </BasicCard>
    </div>
  );
}

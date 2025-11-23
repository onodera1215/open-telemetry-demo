import { Todo } from "@/graphql/documents/graphql";
import { BasicCard } from "../atom/BasicCard";
import { InputArea } from "../atom/BasicInputArea";
import TextArea from "../atom/BasicTextArea";
import CloseIconButton from "./CloseIconButton";

export default function TodoDisplayCard({ todo }: { todo: Todo }) {
  return (
    <div className="max-w-md mx-auto">
      <input type="hidden" name="id" value={todo.id} />
      <BasicCard>
        <div className="flex justify-end"><CloseIconButton type="submit" /></div>
        <div className="mb-1">
          <p className="font-bold">Title</p>
          <InputArea disabled={true} defaultValue={todo.title} />
        </div>
        <div>
          <p className="font-bold">Description</p>
          <TextArea disabled={true} defaultValue={todo.description || ""} />
        </div>
      </BasicCard>
    </div>
  );
}

import { BasicCard } from "../atom/BasicCard";
import { InputArea } from "../atom/BasicInputArea";
import TextArea from "../atom/BasicTextArea";
import BasicButton from "../atom/BasicButton";
import { gql, useMutation } from "urql";

const CreateTodo = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      description
      completed
      createdAt
      updatedAt
    }
  }
`;

export default function TodoInputCard() {
  return (
    <div className="max-w-md mx-auto">
      <BasicCard>
        <div className="mb-1">
          <p className="font-bold">Title</p>
          <InputArea name="title" />
          <p className="font-bold">Description</p>
          <TextArea name="description" />
        </div>

        <div className="flex justify-end ">
          <BasicButton>add</BasicButton>
        </div>
      </BasicCard>
    </div >
  );
}

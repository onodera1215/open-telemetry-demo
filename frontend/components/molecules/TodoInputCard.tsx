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
          <InputArea name="title" />
        </div>
        <TextArea name="description" />
        <BasicButton>add</BasicButton>
      </BasicCard>
    </div >
  );
}

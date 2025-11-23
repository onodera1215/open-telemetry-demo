import { BasicCard } from "../atom/BasicCard";
import { InputArea } from "../atom/BasicInputArea";
import TextArea from "../atom/BasicTextArea";

export default function TodoDisplayCard() {
  return (
    <div className="max-w-md mx-auto">
      <BasicCard>
        <div className="mb-1">
          <InputArea disabled={true} />
        </div>
        <TextArea disabled={true} />
      </BasicCard>
    </div>
  );
}

import { TextareaHTMLAttributes } from "react";

export default function TextArea({ ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      disabled={props.disabled}
      className="border border-gray-300 rounded px-2 py-1 w-full h-32 resize-y focus:outline-none focus:ring-2 focus:ring-primary"
      {...props}
    />
  );
}

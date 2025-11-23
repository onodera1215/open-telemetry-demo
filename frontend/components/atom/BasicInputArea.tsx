import { InputHTMLAttributes } from "react";

export function InputArea(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-primary"
      {...props}
    />
  );
}

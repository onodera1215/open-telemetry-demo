import { ButtonHTMLAttributes } from "react";

export default function BasicButton({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <button
      type="button"
      className="bg-primary text-fc-secondary px-4 py-2 rounded transition cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}

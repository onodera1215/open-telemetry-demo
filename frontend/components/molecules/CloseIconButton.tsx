import { ButtonHTMLAttributes } from "react";
import CloseIcon from "../atom/CloseIcon";


export default function CloseIconButton({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className="hover:bg-secondary hover:text-fc-secondary cursor-pointer rounded" {...props}><CloseIcon /></button>
}
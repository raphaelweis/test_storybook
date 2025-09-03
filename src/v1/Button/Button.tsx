import "@/v1/Button/Button.css";
import type { ReactElement } from "react";

interface ButtonProps {
  label: string;
  icon?: ReactElement;
  primary?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export default function Button({
  label,
  icon,
  primary = false,
  type,
  onClick,
}: ButtonProps) {
  const resolveClassName = () => {
    let className = "v1-button ";
    className += primary ? "primary " : "secondary ";
    className += icon ? "icon " : "";

    return className;
  };

  return (
    <>
      <button type={type} className={resolveClassName()} onClick={onClick}>
        <p>{label}</p>
        {icon}
      </button>
    </>
  );
}

import "@/v1/Input/Input.css";

import Dangerous from "@/assets/dangerous.svg?react";
import Info from "@/assets/info.svg?react";

interface InputProps {
  name?: string;
  error?: boolean;
  info?: boolean;
  errorMessage?: string;
  infoMessage?: string;
  placeholder?: string;
}

export default function Input({
  name,
  error: errorBorder,
  info: infoBorder,
  errorMessage: error,
  infoMessage: info,
  placeholder,
}: InputProps) {
  const resolveClassName = () => {
    let className = "";
    className += errorBorder || error ? "error " : "";
    className += infoBorder || info ? "info " : "";
    return className;
  };

  return (
    <div className="container">
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        className={resolveClassName()}
      />
      {(error || info) && (
        <div className="messageContainer">
          {error ? (
            <Dangerous className="fill-primary-foreground" />
          ) : (
            <Info className="fill-primary-foreground" />
          )}
          <p className={"messageText " + (error ? "errorText" : "infoText")}>
            {error ? error : info}
          </p>
        </div>
      )}
    </div>
  );
}

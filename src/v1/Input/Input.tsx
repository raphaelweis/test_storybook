import "@/v1/Input/Input.css";

import dangerousIcon from "@/v1/assets/dangerous.svg";
import infoIcon from "@/v1/assets/info.svg";

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
          <img src={error ? dangerousIcon : infoIcon} />
          <p className={"messageText " + (error ? "errorText" : "infoText")}>
            {error ? error : info}
          </p>
        </div>
      )}
    </div>
  );
}

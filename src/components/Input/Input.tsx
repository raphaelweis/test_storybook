import "@/components/Input/Input.css";

import dangerousIcon from "@/assets/dangerous.svg";
import infoIcon from "@/assets/info.svg";

interface InputProps {
    name?: string;
    errorBorder?: boolean;
    infoBorder?: boolean;
    error?: string;
    info?: string;
    placeholder?: string;
}

export default function Input({ name, errorBorder, infoBorder, error, info, placeholder }: InputProps) {
    const resolveClassName = () => {
        let className = "";
        className += (errorBorder || error) ? "error " : "";
        className += (infoBorder || info) ? "info " : "";
        return className;
    }

    return (
        <div className="container">
            <input name={name} type="text" placeholder={placeholder} className={resolveClassName()} />
            {(error || info) &&
                <div className="messageContainer">
                    <img src={error ? dangerousIcon : infoIcon} />
                    <p className={"messageText " + (error ? "errorText" : "infoText")}>{error ? error : info}</p>
                </div>
            }
        </div>
    )
}
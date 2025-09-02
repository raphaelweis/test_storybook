import "@/components/Input/Input.css";

import dangerousIcon from "./assets/dangerous.svg";
import infoIcon from "./assets/info.svg";

interface InputProps {
    error?: string;
    info?: string;
    placeholder?: string;
}

export default function Input({ error, info, placeholder }: InputProps) {
    const resolveClassName = () => {
        let className = "";
        className += error ? "error " : "";
        className += info ? "info " : "";
        return className;
    }

    return (
        <div className="container">
            <input type="text" placeholder={placeholder} className={resolveClassName()} />
            {(error || info) &&
                <div className="messageContainer">
                    <img src={error ? dangerousIcon : infoIcon} />
                    <p className={"messageText " + (error ? "errorText" : "infoText")}>{error ? error : info}</p>
                </div>
            }
        </div>
    )
}
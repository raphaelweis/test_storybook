import "./Button.css";

interface ButtonProps {
    label: String,
    iconUrl?: string,
    primary?: boolean;
    onClick: () => void;
}

export default function Button({ label, iconUrl, primary = false, onClick }: ButtonProps
) {
    const resolveClassName = () => {
        let className = "";
        className += primary ? "primary " : "secondary ";
        className += iconUrl ? "icon " : "";

        return className;
    }

    return (<>
        <button className={resolveClassName()} onClick={onClick}>
            <p>{label}</p>
            {iconUrl && <img src={iconUrl} />}
        </button>
    </>)
}

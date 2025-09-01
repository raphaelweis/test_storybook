import "./Button.css";

interface ButtonProps {
    label: String,
    primary?: boolean;
    onClick: () => void;
}

export default function Button({ label, primary = false, onClick }: ButtonProps
) {
    return (<>
        <button className={primary ? "primary" : "secondary"} onClick={onClick}>
            <p>{label}</p>
        </button>
    </>)
}
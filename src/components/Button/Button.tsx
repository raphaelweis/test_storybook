import "@/components/Button/Button.css";

interface ButtonProps {
  label: string;
  iconUrl?: string;
  primary?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export default function Button({
  label,
  iconUrl,
  primary = false,
  type,
  onClick,
}: ButtonProps) {
  const resolveClassName = () => {
    let className = "";
    className += primary ? "primary " : "secondary ";
    className += iconUrl ? "icon " : "";

    return className;
  };

  return (
    <>
      <button type={type} className={resolveClassName()} onClick={onClick}>
        <p>{label}</p>
        {iconUrl && <img src={iconUrl} />}
      </button>
    </>
  );
}

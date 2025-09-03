import "@/components/Form/Form.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface LoginFormProps {
  loggedIn: boolean;
  error?: string;
}

export default function LoginForm({ loggedIn, error }: LoginFormProps) {
  const login = () => {
    // const email = formData.get("email");
    // const password = formData.get("password");
    // if (email === "example@loreal.com" && password === "pass123") {
    // }
  };

  return loggedIn ? (
    <div className="logged-in-container">
      <p>Logged In !</p>
    </div>
  ) : (
    <form action={login}>
      <Input placeholder="Email..." errorBorder={Boolean(error)} />
      <Input placeholder="Password..." error={error} />
      <Button primary={true} label="Login" type="submit" />
    </form>
  );
}

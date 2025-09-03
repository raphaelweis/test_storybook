import "@/components/Form/Form.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface LoginFormProps {
  loggedIn: boolean;
  error?: string;
}

export default function LoginForm({ loggedIn, error }: LoginFormProps) {
  return loggedIn ? (
    <div className="logged-in-container">
      <p>Logged In !</p>
    </div>
  ) : (
    <form action={() => {}}>
      <Input placeholder="Email..." error={Boolean(error)} />
      <Input placeholder="Password..." errorMessage={error} />
      <Button primary={true} label="Login" type="submit" />
    </form>
  );
}

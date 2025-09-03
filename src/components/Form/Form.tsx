import "@/components/Form/Form.css"
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Form() {
    const login = (formData: FormData) => {
        console.log(formData.get("email"));
        console.log(formData.get("password"))
    };

    return (
        <form action={login}>
            <Input placeholder="Email..." />
            <Input placeholder="Password..." />
            <Button primary={true} label="Login" type="submit" />
        </form>
    );
}
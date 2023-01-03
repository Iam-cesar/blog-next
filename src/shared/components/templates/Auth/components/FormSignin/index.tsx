import Link from "next/link";
import { Button } from "shared/components/atoms/Buttons";
import useFormSubmit from "shared/components/templates/Auth/hooks/useFormSubmit";
import { FormInputControl } from "../FormInputControl";
import { Container } from "./styles";

const FormSignin = () => {
  const { submitFormSignIn, email, setEmail, password, setPassword } =
    useFormSubmit();

  return (
    <Container>
      <h1>Welcome back !</h1>
      <form onSubmit={(e) => submitFormSignIn(e)}>
        <FormInputControl
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ariaDescribedBy="place your email here"
          description="We'll never share your email."
        />

        <FormInputControl
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ariaDescribedBy="place your password here"
          description="The password must contain numbers, uppercase, lowercase and symbols"
        />

        <div className="button-container">
          <Button type="submit">Login</Button>
        </div>
      </form>

      <span>
        <Link href="/auth/signup">Create an account!</Link>
      </span>
    </Container>
  );
};

export { FormSignin };

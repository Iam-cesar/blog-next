import Link from "next/link";
import { Button } from "shared/components/atoms/Buttons";
import useFormSubmit from "shared/components/templates/Auth/hooks/useFormSubmit";
import { FormInputControl } from "../FormInputControl";
import { Container } from "./styles";

const FormSignup = () => {
  const {
    submitFormSignUp,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
  } = useFormSubmit();

  return (
    <Container>
      <h1>Create your account</h1>
      <form onSubmit={(e) => submitFormSignUp(e)}>
        <FormInputControl
          type="text"
          label="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          ariaDescribedBy="place your first name here"
        />

        <FormInputControl
          type="text"
          label="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          ariaDescribedBy="place your last name here"
        />

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
          <Button type="submit">Create an account</Button>
        </div>
      </form>

      <span>
        <Link href="/auth/signin">Already have a account? signin</Link>
      </span>
    </Container>
  );
};

export { FormSignup };

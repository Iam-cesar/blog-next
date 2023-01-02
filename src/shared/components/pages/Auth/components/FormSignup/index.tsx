import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { FormInputControl } from "./FormInputControl";
import useFormSubmit from "./hooks/useFormSubmit";
import { Container } from "./styles";

const FormSignup = () => {
  const {
    submitForm,
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
      <form onSubmit={(e) => submitForm(e)}>
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
          <button type="submit">Create an account</button>
        </div>
      </form>

      <span>
        <Link href="/auth/signin">Already have a account? signin</Link>
      </span>
    </Container>
  );
};

export default FormSignup;

import Link from "next/link";
import { FormEvent, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../../../hooks/useAuth";
import { Container } from "./styles";

const FormSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();

  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signUp({ firstName, lastName, email, password });
  }

  return (
    <Container>
      <h1>Create your account</h1>
      <form onSubmit={(e) => submitForm(e)}>
        <div className="form-control">
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            aria-describedby="place your first name here"
          />
        </div>

        <div className="form-control">
          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            required
            value={lastName}
            aria-describedby="place your email here"
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
            aria-describedby="place your email here"
          />
          <span>We&apos;ll never share your email.</span>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
            aria-describedby="place your password here"
          />
          <span>
            The password must contain numbers, uppercase, lowercase and symbols
          </span>
        </div>

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

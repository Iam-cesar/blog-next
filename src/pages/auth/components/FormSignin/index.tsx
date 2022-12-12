import Link from "next/link";
import { FormEvent, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../../shared/hooks/useAuth";
import { Container } from "./styles";

const FormSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signIn({ email, password });
  }

  return (
    <Container>
      <h1>Welcome back !</h1>
      <form onSubmit={(e) => submitForm(e)}>
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
          <button type="submit">Login</button>
        </div>
      </form>

      <span>
        <Link href="/auth/signup">Create an account!</Link>
      </span>
    </Container>
  );
};

export default FormSignin;

import { FormEvent, useState } from "react";
import useAuth from "shared/hooks/useAuth";

const useFormSubmit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, signIn } = useAuth();

  async function submitFormSignUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signUp({ firstName, lastName, email, password });
  }

  async function submitFormSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signIn({ email, password });
  }

  return {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    firstName,
    lastName,
    email,
    password,
    submitFormSignUp,
    submitFormSignIn,
  };
};

export default useFormSubmit;

import { FormEvent, useState } from "react";
import useAuth from "shared/hooks/useAuth";

const useFormSubmit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();

  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signUp({ firstName, lastName, email, password });
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
    submitForm,
  };
};

export default useFormSubmit;

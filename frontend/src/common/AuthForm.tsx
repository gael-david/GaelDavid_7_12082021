import { useState } from "react";

type Props = {
  title: string;
  onSubmit: (email: string, password: string) => Promise<string>;
};

export default function AuthForm({ title, onSubmit }: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  async function handleSubmit() {
    if (email === "" || password === "") return;
    try {
      const res = await onSubmit(email, password);
      //   console.log(res.error);
      //   setError(res.error);
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <input type="email" name="email" id="email" onChange={handleEmail} />
      <input type="password" name="password" id="password" onChange={handlePassword} />
      <button onClick={handleSubmit} disabled={!(email !== "" && password !== "")}>
        Register
      </button>
      {error && <div>{error}</div>}
    </div>
  );
}

import { useState } from "react";

type Props = {
  title: string;
  onSubmit: (email: string, password: string) => Promise<void>;
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
      await onSubmit(email, password);
    } catch (error: any) {
      setError(error?.response?.data?.message);
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <input type="email" name="email" id="email" onChange={handleEmail} />
      <input type="password" name="password" id="password" onChange={handlePassword} />
      <button onClick={handleSubmit} disabled={!(email !== "" && password !== "")}>
        {title}
      </button>
      {error && <div>{error}</div>}
    </div>
  );
}

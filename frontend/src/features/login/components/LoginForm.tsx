import { useState } from "react";
import Button from "../../../common/components/buttons/Button";
import { AuthCard } from "../../../common/components/cards/AuthCard";

type Props = {
  onSubmit: (email: string, password: string) => Promise<void>;
};

export default function LoginForm({ onSubmit }: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  const isFormDisabled = email === "" || password === "";

  async function handleSubmit() {
    if (isFormDisabled) return;
    try {
      await onSubmit(email, password);
    } catch (error: any) {
      setError(error?.response?.data?.message);
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e?.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <AuthCard>
      <h1>Login</h1>
      <input type="email" name="email" id="email" placeholder="Email" onChange={handleEmail} />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={handlePassword}
        onKeyPress={handleKeyPress}
      />
      <Button primary onClick={handleSubmit} disabled={isFormDisabled}>
        Login
      </Button>
      {error && <div>{error}</div>}
    </AuthCard>
  );
}

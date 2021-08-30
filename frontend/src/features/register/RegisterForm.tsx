import { useState } from "react";
import Button from "../../common/components/buttons/Button";
import { AuthCard } from "../../common/components/cards/AuthCard";

type Props = {
  onSubmit: (username: string, email: string, password: string) => Promise<void>;
};

export default function RegisterForm({ onSubmit }: Props) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.currentTarget.value);
  }

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  const isFormDisabled = email === "" || password === "" || username === "";

  async function handleSubmit() {
    if (isFormDisabled) return;
    try {
      await onSubmit(username, email, password);
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
      <h1>Register</h1>
      <input type="username" name="username" id="username" placeholder="Username" onChange={handleUsername} />
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
        Register
      </Button>
      {error && <div>{error}</div>}
    </AuthCard>
  );
}

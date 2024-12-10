"use client";

import Input from "@/_components/ui/Input";
import Button from "@/_components/ui/Button";
import Form from "@/_components/ui/Form";
import FormRowVertical from "@/_components/ui/FromRowVertical";
import SpinnerMini from "@/_components/ui/SpinnerMini";
import { logIn } from "@/_lib/actions/user.actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("directeur@voyager.com");
  const [password, setPassword] = useState("abcd1234");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <Form
      action={async () => {
        setIsLoggingIn(true);
        try {
          const { message, data } = await logIn({ email, password });
          if (message) setError(message);
          if (data) router.push("/");
        } finally {
          setIsLoggingIn(false);
        }
      }}
    >
      <FormRowVertical label="Email">
        <Input
          type="email"
          id="email"
          required
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoggingIn}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoggingIn}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoggingIn}>
          {!isLoggingIn ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      {error && (
        <FormRowVertical>
          <p className="text-red-400">{error}</p>
        </FormRowVertical>
      )}
    </Form>
  );
}

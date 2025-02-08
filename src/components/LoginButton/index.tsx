"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const LoginButton = () => {
  return (
    <Button onClick={() => signIn("google", { callbackUrl: "/teste" })}>
      Login
    </Button>
  );
};

export default LoginButton;

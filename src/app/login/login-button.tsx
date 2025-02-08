"use client";

import { signIn } from "next-auth/react";
import { Button } from "../../components/ui/button";

const LoginButton = () => {
  return (
    <Button
      onClick={() => signIn("google")}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
    >
      Sign in with Google
    </Button>
  );
};

export default LoginButton;

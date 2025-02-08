"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  return (
    <Button
      onClick={() => signOut()}
      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;

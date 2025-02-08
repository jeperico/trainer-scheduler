"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Batata = () => {
  return (
    <Button
      onClick={() => signOut()}
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      Logout
    </Button>
  );
};

export default Batata;

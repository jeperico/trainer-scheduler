import LoginButton from "./login-button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Login = async () => {
  const session = await getServerSession();
  if (session) {
    return redirect("/logout");
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Card className="max-w-md w-full shadow-lg">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Sign In
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-500 mb-4">
            Log in with Google to continue
          </p>
          <LoginButton />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

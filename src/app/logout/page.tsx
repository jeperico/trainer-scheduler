import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogoutButton from "./logout-button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Logout = async () => {
  const session = await getServerSession();
  if (!session) {
    return redirect("/login");
  }

  return (
    <main className="h-[80vh] flex justify-center items-center">
      <Card className="max-w-md w-full shadow-lg">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Sign Out
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-500 mb-4">
            Logout from your account
          </p>
          <LogoutButton />
        </CardContent>
      </Card>
    </main>
  );
};

export default Logout;

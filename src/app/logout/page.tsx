import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Batata from "./btn";

const Logout = async () => {
  const session = await getServerSession();

  if (!session) {
    return redirect("/login");
  }

  return (
    <div>
      <h1>Teste</h1>
      <p>Olá, {session.user?.name}!</p>
      <p>Email, {session.user?.email}</p>
      <Batata />
    </div>
  );
};

export default Logout;

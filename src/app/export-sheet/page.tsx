import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Export from "./export";

const NewWorkout = async () => {
  const session = await getServerSession();
  if (!session) {
    return redirect("/login");
  }

  return <Export />;
};

export default NewWorkout;

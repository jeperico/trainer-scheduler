import React from "react";
import { Button } from "../ui/button";
import IWorkout from "@/interfaces/workout";
import Link from "next/link";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// const session = await getServerSession();
// if (!session) {
//   return redirect("/login");
// }

interface ExportButtonProps {
  data: IWorkout;
}

const ExportButton: React.FC<ExportButtonProps> = ({ data }) => {
  return (
    <Button asChild variant="outline">
      <Link href={`/export-sheet?id=${data.id}`}>Exportar</Link>
    </Button>
  );
};

export default ExportButton;

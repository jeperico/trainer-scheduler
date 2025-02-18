import React from "react";
import { Button } from "../ui/button";
import IWorkout from "@/interfaces/workout";
import Link from "next/link";

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

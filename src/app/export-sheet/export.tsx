// "use client";

import React from "react";
import create from "@/services/sheets/create";
// import getWorkoutById from "@/services/workout/getWorkoutById";
// import { useSearchParams } from "next/navigation";
// import IWorkout from "@/interfaces/workout";

const Export = () => {
  // const [workout, setWorkout] = useState<IWorkout | undefined>();
  // const searchParams = useSearchParams();
  // useEffect(() => {
  //   const id = searchParams.get("id");
  //   if (!id) return;
  //   setWorkout(getWorkoutById(id));
  // }, [searchParams]);

  const handleCreate = async () => {
    create("MIGUIELS").catch(console.error);
  };

  handleCreate();

  return <p>Teste</p>;
};

export default Export;

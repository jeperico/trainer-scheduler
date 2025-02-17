"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import getWorkoutById from "@/services/workout/getWorkoutById";
import IWorkout from "@/interfaces/workout";

const NewWorkout = () => {
  const [workout, setWorkout] = useState<IWorkout | undefined>();
  const searchParams = useSearchParams();
  useEffect(() => {
    const id = searchParams.get("id");
    if (!id) return;
    setWorkout(getWorkoutById(id));
  }, [searchParams]);

  return <p>{workout?.id}</p>;
};

export default NewWorkout;

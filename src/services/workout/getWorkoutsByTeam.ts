import IWorkout from "@/interfaces/workout";
import { get } from "@/provider/api";

const getWorkoutsByTeam = (name: string) => {
  const workouts = get("workouts-data");

  return workouts.filter(
    (workout: IWorkout) => workout.team && workout.team.name === name,
  );
};

export default getWorkoutsByTeam;

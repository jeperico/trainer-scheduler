import IWorkout from "@/interfaces/workout";
import { get } from "@/provider/api";

const getWorkoutsByPolo = (polo: string) => {
  const workouts = get("workouts-data");

  return workouts.filter(
    (workout: IWorkout) => workout.team && workout.team.polo === polo,
  );
};

export default getWorkoutsByPolo;

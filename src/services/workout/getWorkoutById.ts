import IWorkout from "@/interfaces/workout";
import { get } from "@/provider/api";

const getWorkoutById = (id: string) => {
  const workouts = get("workouts-data");

  return workouts.find((workout: IWorkout) => workout.id === id);
};

export default getWorkoutById;

import IWorkout from "@/interfaces/workout";
import { get } from "@/provider/api";
import getWeekday from "@/utils/get-weekday";

const getWorkoutsByDay = (day: string) => {
  const workouts = get("workouts-data");

  const newDay = day.toLowerCase();

  return workouts.filter(
    (workout: IWorkout) =>
      getWeekday(new Date(workout.date).getDay()) === newDay,
  );
};

export default getWorkoutsByDay;

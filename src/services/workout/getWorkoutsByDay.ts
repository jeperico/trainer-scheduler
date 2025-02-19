import IWorkout from "@/interfaces/workout";
import { get } from "@/provider/api";
import getWeekday from "@/utils/get-weekday";

/**
 * @description Get the workout data using day
 * @module services/workout/getWorkoutsByDay
 *
 * @param {string} day - The workout day
 * @return {Array<IWorkout>} - The workout data
 * @example
 * const workouts = getWorkoutsByDay("Monday");
 */

const getWorkoutsByDay = (day: string): Array<IWorkout> => {
  const workouts = get("workouts-data");

  const newDay = day.toLowerCase();

  return workouts.filter(
    (workout: IWorkout) =>
      getWeekday(new Date(workout.date).getDay()) === newDay,
  );
};

export default getWorkoutsByDay;

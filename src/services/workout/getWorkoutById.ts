import IWorkout from "@/interfaces/workout";
import { get } from "@/provider/api";

/**
 * @description Get the workout data using id
 * @module services/workout/getWorkoutById
 *
 * @param {string} id - The workout id
 * @return {IWorkout} - The workout data
 * @example
 * const workout = getWorkoutById("uuid_example");
 */

const getWorkoutById = (id: string): IWorkout => {
  const workouts = get("workouts-data");

  return workouts.find((workout: IWorkout) => workout.id === id);
};

export default getWorkoutById;

import IWorkout from "@/interfaces/workout";
import { get } from "@/provider/api";

/**
 * Get the workout data using polo
 *
 * @param {string} polo - The workout polo
 * @return {Array<IWorkout>} - The workout data
 * @example
 * const workouts = getWorkoutsByPolo("example");
 */

const getWorkoutsByPolo = (polo: string): Array<IWorkout> => {
  const workouts = get("workouts-data");

  return workouts.filter(
    (workout: IWorkout) => workout.team && workout.team.polo === polo,
  );
};

export default getWorkoutsByPolo;

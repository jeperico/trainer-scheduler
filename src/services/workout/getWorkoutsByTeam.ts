import IWorkout from "@/interfaces/workout";
import { get } from "@/provider/api";

/**
 * Get the workout data using team
 *
 * @param {string} name - The team name
 * @return {Array<IWorkout>} - The workout data
 * @example
 * const workouts = getWorkoutsByTeam("example");
 */

const getWorkoutsByTeam = (name: string): Array<IWorkout> => {
  const workouts = get("workouts-data");

  return workouts.filter(
    (workout: IWorkout) => workout.team && workout.team.name === name,
  );
};

export default getWorkoutsByTeam;

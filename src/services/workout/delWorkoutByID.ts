import IWorkout from "@/interfaces/workout";
import { get } from "@/provider/api";

/**
 * @description Delete the workout data using id
 * @module services/workout/delWorkoutByID
 *
 * @param {string} id - The workout id
 * @example
 * delWorkoutByID("uuid_example");
 */

export const delWorkoutByID = (id: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const currentData = get("workouts-data");
    const newData = currentData.filter(
      (workout: IWorkout) => workout.id !== id,
    );

    localStorage.setItem("workouts-data", JSON.stringify(newData));
    window.location.reload();
  }
};

export default delWorkoutByID;

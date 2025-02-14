import IWorkout from "@/interfaces/workout";
import { get } from "@/provider/api";

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

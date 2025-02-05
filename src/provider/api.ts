import ITeam from "@/interfaces/team";
import IWorkout from "@/interfaces/workout";

export const get = (uri: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const data = JSON.parse(localStorage.getItem(uri) || "[]");

    return data;
  }
  return [];
};

export const post = (uri: string, data: object) => {
  if (typeof window !== "undefined" && window.localStorage) {
    let currentData = JSON.parse(localStorage.getItem(uri) || "[]");
    if (!Array.isArray(currentData)) {
      currentData = [];
    }

    currentData.push(data);

    localStorage.setItem(uri, JSON.stringify(currentData));

    const workoutData = JSON.parse(localStorage.getItem(uri) || "[]");

    return workoutData;
  }
  return [];
};

export const del = (uri: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem(uri);
  }
};

export const getTeamByName = (name: string) => {
  const teams = get("teams-data");

  return teams.find((team: ITeam) => team.name === name);
};

export const getTeamById = (id: string) => {
  const teams = get("teams-data");

  return teams.find((team: ITeam) => team.id === id);
};

export const getTeamsByGender = (gender: string) => {
  const teams = get("teams-data");

  return teams.filter((team: ITeam) => team.gender === gender);
};

export const getWorkoutById = (id: string) => {
  const workouts = get("workouts-data");

  return workouts.find((workout: IWorkout) => workout.id === id);
};

export const getWorkoutsByTeam = (name: string) => {
  const workouts = get("workouts-data");

  return workouts.filter((workout: IWorkout) => workout.team.name === name);
};

export const getWorkoutsByPolo = (polo: string) => {
  const workouts = get("workouts-data");

  return workouts.filter((workout: IWorkout) => workout.team.polo === polo);
};

export const getWorkoutsByDay = (day: string) => {
  const workouts = get("workouts-data");

  const newDay = day.toLowerCase();

  return workouts.filter(
    (workout: IWorkout) =>
      workout.team.day[0]?.weekday === newDay ||
      workout.team.day[1]?.weekday === newDay,
  );
};

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

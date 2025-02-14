import ITeam from "@/interfaces/team";
import IWorkout from "@/interfaces/workout";
import getWeekday from "@/utils/get-weekday";

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

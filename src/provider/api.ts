/**
 * @description GET request to local storage
 * @module provider/api
 *
 * @param {string} uri - The URI to get data from
 * @returns {any} The data from the URI
 * @import { get } from "@/provider/api"
 *
 * @example
 * const data = get("workouts");
 */
export const get = (uri: string): any => {
  if (typeof window !== "undefined" && window.localStorage) {
    const data = JSON.parse(localStorage.getItem(uri) || "[]");

    return data;
  }
  return [];
};

/**
 * @description POST request to local storage
 * @module provider/api
 *
 * @param {string} uri - The URI to post data to
 * @param {object} data - The data to post
 * @returns {any} The data from the URI
 * @import { post } from "@/provider/api"
 *
 * @example
 * const data = post("workouts", { name: "Test Workout" });
 */
export const post = (uri: string, data: object): any => {
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

/**
 * @description DELETE request to local storage
 * @module provider/api
 *
 * @param {string} uri - The URI to delete data from
 * @import { del } from "@/provider/api"
 *
 * @example
 * del("workouts");
 */
export const del = (uri: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem(uri);
  }
};

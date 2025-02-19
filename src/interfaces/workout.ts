import IExercise from "@/interfaces/exercise";
import ITeam from "@/interfaces/team";

/**
 * @description Interface for Workout data
 * @module interfaces/workout
 *
 * @property {string} id - The id of the workout
 * @property {ITeam} team - The team of the workout
 * @property {string} objective - The objective of the workout
 * @property {Date} date - The date of the workout
 * @property {Array<IExercise>} exercises - The exercises of the workout
 * @example
 * {
 *   id: "1",
 *   team: {
 *     id: "1",
 *     name: "Team 1",
 *   },
 *   objective: "Objective 1",
 *   date: new Date(),
 *   exercises: [
 *     {
 *       id: "1",
 *       name: "Exercise 1",
 *     },
 *   ],
 * }
 */

export default interface IWorkout {
  id: string;
  team: ITeam;
  objective: string;
  date: Date;
  exercises: Array<IExercise>;
}

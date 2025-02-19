/**
 * @description Interface for Exercise data
 * @module interfaces/exercise
 *
 * @property {string} title - The title of the exercise
 * @property {string} description - The description of the exercise
 * @property {string} [objectives] - The optional objectives of the exercise
 * @property {number} duration - The duration of the exercise in minutes
 * @example
 * {
 *   title: "Push-ups",
 *   description: "An exercise to strengthen the upper body.",
 *   objectives: "Increase upper body strength",
 *   duration: 30
 * }
 */

export default interface IExercise {
  title: string;
  description: string;
  objectives?: string;
  duration: number;
}

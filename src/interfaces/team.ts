import { Time } from "@/types/time";
import { Locale } from "@/types/locale";
import { Gender } from "@/types/gender";

/**
 * @description Interface for Team data
 * @module interfaces/team
 *
 * @property {string} id - The id of the team
 * @property {string} name - The name of the team
 * @property {Gender} gender - The gender category of the team
 * @property {Array<{ weekday: string; startTime: Time; endTime: Time }>} day - The schedule of the team
 * @property {Locale} polo - The locale of the team
 * @example
 * {
 *   id: "1",
 *   name: "Team A",
 *   gender: "Male",
 *   day: [
 *     {
 *       weekday: "Monday",
 *       startTime: "08:00",
 *       endTime: "10:00"
 *     }
 *   ],
 *   polo: "Locale A"
 * }
 */

export default interface ITeam {
  id: string;
  name: string;
  gender: Gender;
  day: Array<{
    weekday: string;
    startTime: Time;
    endTime: Time;
  }>;
  polo: Locale;
}

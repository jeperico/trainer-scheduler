import { Time } from "@/types/time";
import { Locale } from "@/types/locale";

export type Gender = "Masculino" | "Feminino";

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

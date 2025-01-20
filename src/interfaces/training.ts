import { Locale } from '@/types/locale';
import IExercise from './exercise';
import { Time } from '@/types/time';

export default interface ITraining {
  team: string;
  month: string;
  objective: string;
  location: Locale;
  date: Date;
  startTime: Time;
  endTime: Time;
  data: Array<IExercise>;
}

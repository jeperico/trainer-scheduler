import { Time } from '@/types/time';
import { Locale } from '@/types/locale';

export enum Weekday {
  sunday = 0,
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6,
}

export default interface ITeam {
  id: string;
  name: string;
  gender: 'Masculino' | 'Feminino';
  day: Array<{
    weekday: Weekday;
    startTime: Time;
    endTime: Time;
  }>;
  location: Locale;
}

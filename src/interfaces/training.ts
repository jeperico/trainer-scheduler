import IExercise from '@/interfaces/exercise';
import ITeam from '@/interfaces/team';

export default interface ITraining {
  team: ITeam;
  objective: string;
  date: Date;
  exercises: Array<IExercise>;
}

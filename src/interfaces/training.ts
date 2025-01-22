import IExercise from '@/interfaces/exercise';
import ITeam from '@/interfaces/team';

export default interface ITraining {
  id: string;
  team: ITeam;
  objective: string;
  date: Date;
  exercises: Array<IExercise>;
}

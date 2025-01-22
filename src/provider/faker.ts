import ITeam from '@/interfaces/team';
import ITraining from '@/interfaces/training';
import { get, getTeamByName, post } from '@/provider/api';
import { v4 as uuidv4 } from 'uuid';

const trainingData: Array<ITraining> = [
  {
    id: '91bd569e-1730-4cc3-bd15-3e6119e37cbb',
    team: getTeamByName('Baby Iniciante'),
    objective: 'O objetivo deve ter no mínimo 3 caracteres',
    date: new Date(),
    exercises: [
      {
        title: 'Manchetão',
        description: 'A descrição deve ter no mínimo 3 caracteres',
        objectives: 'O objetivo deve ter no mínimo 3 caracteres',
        duration: 25,
      },
    ],
  },
  {
    id: uuidv4(),
    team: getTeamByName('Iniciante Bucarein'),
    objective: 'O objetivo deve ter no mínimo 3 caracteres',
    date: new Date(),
    exercises: [
      {
        title: 'Manchetão',
        description: 'A descrição deve ter no mínimo 3 caracteres',
        objectives: 'O objetivo deve ter no mínimo 3 caracteres',
        duration: 25,
      },
      {
        title: 'Manchetão',
        description: 'A descrição deve ter no mínimo 3 caracteres',
        objectives: 'O objetivo deve ter no mínimo 3 caracteres',
        duration: 25,
      },
    ],
  },
  {
    id: uuidv4(),
    team: getTeamByName('Sub 18'),
    objective: 'O objetivo deve ter no mínimo 3 caracteres',
    date: new Date(),
    exercises: [
      {
        title: 'Manchetão',
        description: 'A descrição deve ter no mínimo 3 caracteres',
        objectives: 'O objetivo deve ter no mínimo 3 caracteres',
        duration: 25,
      },
      {
        title: 'Manchetão',
        description: 'A descrição deve ter no mínimo 3 caracteres',
        objectives: 'O objetivo deve ter no mínimo 3 caracteres',
        duration: 25,
      },
      {
        title: 'Manchetão',
        description: 'A descrição deve ter no mínimo 3 caracteres',
        objectives: 'O objetivo deve ter no mínimo 3 caracteres',
        duration: 25,
      },
      {
        title: 'Manchetão',
        description: 'A descrição deve ter no mínimo 3 caracteres',
        objectives: 'O objetivo deve ter no mínimo 3 caracteres',
        duration: 25,
      },
    ],
  },
  {
    id: uuidv4(),
    team: getTeamByName('Rendimento'),
    objective: 'O objetivo deve ter no mínimo 3 caracteres',
    date: new Date(),
    exercises: [
      {
        title: 'Manchetão',
        description: 'A descrição deve ter no mínimo 3 caracteres',
        objectives: 'O objetivo deve ter no mínimo 3 caracteres',
        duration: 25,
      },
      {
        title: 'Manchetão',
        description: 'A descrição deve ter no mínimo 3 caracteres',
        objectives: 'O objetivo deve ter no mínimo 3 caracteres',
        duration: 25,
      },
      {
        title: 'Manchetão',
        description: 'A descrição deve ter no mínimo 3 caracteres',
        objectives: 'O objetivo deve ter no mínimo 3 caracteres',
        duration: 25,
      },
      {
        title: 'Manchetão',
        description: 'A descrição deve ter no mínimo 3 caracteres',
        objectives: 'O objetivo deve ter no mínimo 3 caracteres',
        duration: 25,
      },
    ],
  },
];

const teamData: Array<ITeam> = [
  {
    id: uuidv4(),
    name: 'Baby Iniciante',
    gender: 'Feminino',
    day: [
      {
        weekday: 1,
        startTime: {
          hours: 18,
          minutes: 30,
        },
        endTime: {
          hours: 19,
          minutes: 30,
        },
      },
      {
        weekday: 3,
        startTime: {
          hours: 18,
          minutes: 30,
        },
        endTime: {
          hours: 19,
          minutes: 30,
        },
      },
    ],
    location: 'Oficina',
  },
  {
    id: uuidv4(),
    name: 'Iniciante Bucarein',
    gender: 'Feminino',
    day: [
      {
        weekday: 2,
        startTime: {
          hours: 14,
          minutes: 0,
        },
        endTime: {
          hours: 15,
          minutes: 0,
        },
      },
      {
        weekday: 5,
        startTime: {
          hours: 15,
          minutes: 0,
        },
        endTime: {
          hours: 16,
          minutes: 0,
        },
      },
    ],
    location: 'Bucarein',
  },
  {
    id: uuidv4(),
    name: 'Iniciante Oficina',
    gender: 'Feminino',
    day: [
      {
        weekday: 3,
        startTime: {
          hours: 19,
          minutes: 0,
        },
        endTime: {
          hours: 20,
          minutes: 0,
        },
      },
    ],
    location: 'Oficina',
  },
  {
    id: uuidv4(),
    name: 'Intermediário',
    gender: 'Feminino',
    day: [
      {
        weekday: 2,
        startTime: {
          hours: 16,
          minutes: 0,
        },
        endTime: {
          hours: 17,
          minutes: 0,
        },
      },
      {
        weekday: 5,
        startTime: {
          hours: 16,
          minutes: 0,
        },
        endTime: {
          hours: 17,
          minutes: 0,
        },
      },
    ],
    location: 'Bucarein',
  },
  {
    id: uuidv4(),
    name: 'Rendimento',
    gender: 'Feminino',
    day: [
      {
        weekday: 2,
        startTime: {
          hours: 19,
          minutes: 0,
        },
        endTime: {
          hours: 21,
          minutes: 0,
        },
      },
    ],
    location: 'Oficina',
  },
  {
    id: uuidv4(),
    name: 'Sub 18',
    gender: 'Masculino',
    day: [
      {
        weekday: 5,
        startTime: {
          hours: 19,
          minutes: 0,
        },
        endTime: {
          hours: 20,
          minutes: 15,
        },
      },
    ],
    location: 'Atiradores',
  },
];

const FetchData = () => {
  post('faker-training-data', trainingData);
  if (get('teams-data').length === 0) post('teams-data', teamData);
};

export default FetchData;

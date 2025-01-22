import ITeam from '@/interfaces/team';
import ITraining from '@/interfaces/training';
import { post } from '@/provider/api';
import { v4 as uuidv4 } from 'uuid';

const trainingData: Array<ITraining> = [
  {
    id: uuidv4(),
    team: {
      id: uuidv4(),
      name: 'Iniciante',
      gender: 'Feminino',
      day: [
        {
          weekday: 3,
          startTime: {
            hours: 10,
            minutes: 0,
          },
          endTime: {
            hours: 11,
            minutes: 30,
          },
        },
      ],
      location: 'Bucarein',
    },
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
    team: {
      id: uuidv4(),
      name: 'Intermediário',
      gender: 'Masculino',
      day: [
        {
          weekday: 0,
          startTime: {
            hours: 11,
            minutes: 0,
          },
          endTime: {
            hours: 12,
            minutes: 30,
          },
        },
      ],
      location: 'Bucarein',
    },
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
    team: {
      id: uuidv4(),
      name: 'Competição',
      gender: 'Feminino',
      day: [
        {
          weekday: 5,
          startTime: {
            hours: 15,
            minutes: 0,
          },
          endTime: {
            hours: 16,
            minutes: 30,
          },
        },
      ],
      location: 'Itaum',
    },
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
    team: {
      id: uuidv4(),
      name: 'Competição',
      gender: 'Feminino',
      day: [
        {
          weekday: 5,
          startTime: {
            hours: 15,
            minutes: 0,
          },
          endTime: {
            hours: 16,
            minutes: 30,
          },
        },
      ],
      location: 'Itaum',
    },
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
    name: 'Iniciante',
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
    name: 'Iniciante',
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
  post('teams-data', teamData);
};

export default FetchData;

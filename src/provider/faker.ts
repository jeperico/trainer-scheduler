import ITraining from '@/interfaces/training';
import { post } from '@/provider/api';
import { v4 as uuidv4 } from 'uuid';

const data: Array<ITraining> = [
  {
    id: uuidv4(),
    team: {
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

const FetchData = () => {
  post('faker-training-data', data);
};

export default FetchData;

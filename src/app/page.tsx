'use client';

import TrainingCard from '@/components/TrainingCard';
import ITraining from '@/interfaces/training';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
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

  const addComponents = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('faker-training-data', JSON.stringify(data));

      const trainingData = JSON.parse(
        localStorage.getItem('faker-training-data') || '[]'
      );

      return trainingData;
    }
    return [];
  };

  return (
    <>
      <main className="mx-auto w-[90vw] max-w-[1240px] p-4 grid grid-cols-2 gap-4">
        {addComponents().map((data: ITraining) => {
          return (
            <div key={data.id}>
              <TrainingCard data={data}></TrainingCard>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Home;

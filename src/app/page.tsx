'use client';

import TrainingCard from '@/components/TrainingCard';
import ITraining from '@/interfaces/training';
import React from 'react';

const Home = () => {
  const data = [
    {
      team: {
        name: 'Iniciante',
        gender: 'Feminino',
        day: [
          {
            weekday: 'monday',
            startTime: '10:00',
            endTime: '11:30',
          },
        ],
        location: 'Costa e Silva',
      },
      objective: 'O objetivo deve ter no mínimo 3 caracteres',
      date: 'YYYY-MM-DD',
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
      team: {
        name: 'Intermediário',
        gender: 'Masculino',
        day: [
          {
            weekday: 'sunday',
            startTime: '11:00',
            endTime: '12:30',
          },
        ],
        location: 'Guanabara',
      },
      objective: 'O objetivo deve ter no mínimo 3 caracteres',
      date: 'YYYY-MM-DD',
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
      team: {
        name: 'Competição',
        gender: 'Feminino',
        day: [
          {
            weekday: 'friday',
            startTime: '15:00',
            endTime: '16:30',
          },
        ],
        location: 'Itaum',
      },
      objective: 'O objetivo deve ter no mínimo 3 caracteres',
      date: 'YYYY-MM-DD',
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
            <>
              <TrainingCard data={data}></TrainingCard>
            </>
          );
        })}
      </main>
    </>
    // <div className="container mx-auto p-4">
    //   {addComponents().map((training: ITraining, index: number) => {
    //     return (
    //       <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
    //         <h3 className="text-xl font-bold mb-2">
    //           Time: {training.team.name}
    //         </h3>
    //         <p className="text-gray-700 mb-1">Gênero: {training.team.gender}</p>
    //         <p className="text-gray-700 mb-1">
    //           Local: {training.team.location.toString()}
    //         </p>
    //         <p className="text-gray-700 mb-1">Objetivo: {training.objective}</p>
    //         <p className="text-gray-700 mb-1">
    //           Data: {training.date.toString()}
    //         </p>
    //         <h4 className="text-lg font-semibold mt-4 mb-2">Exercícios:</h4>
    //         {training.exercises.map((exercise: IExercise, index: number) => {
    //           return (
    //             <div key={index} className="bg-gray-100 p-4 rounded-lg mb-2">
    //               <p className="text-gray-800 mb-1">Nome: {exercise.title}</p>
    //               <p className="text-gray-800 mb-1">
    //                 Descrição: {exercise.description}
    //               </p>
    //               <p className="text-gray-800 mb-1">
    //                 Objetivos: {exercise.objectives}
    //               </p>
    //               <p className="text-gray-800 mb-1">
    //                 Duração: {exercise.duration}
    //               </p>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Home;

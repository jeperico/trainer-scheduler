'use client';

import TrainingCard from '@/components/TrainingCard';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import ITraining from '@/interfaces/training';
import Link from 'next/link';
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
      <header className="mx-auto w-[90vw] max-w-[1240px] mt-32 mb-8">
        <div className="flex justify-between items-center">
          <Button
            asChild
            className="bg-green-600 text-white hover:bg-green-700"
          >
            <Link href="/new-training">Criar novo treino</Link>
          </Button>
          <div className="flex gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Gênero</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[420px]">
                      <NavigationMenuLink>Masculino</NavigationMenuLink>
                      <NavigationMenuLink>Feminino</NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Nome</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[420px]">
                      <NavigationMenuLink>
                        Iniciante Feminino
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        Intermediário Masculino
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        Competição Feminino
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Dia da Semana</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[420px]">
                      <NavigationMenuLink>Domingo</NavigationMenuLink>
                      <NavigationMenuLink>Segunda</NavigationMenuLink>
                      <NavigationMenuLink>Terça</NavigationMenuLink>
                      <NavigationMenuLink>Quarta</NavigationMenuLink>
                      <NavigationMenuLink>Quinta</NavigationMenuLink>
                      <NavigationMenuLink>Sexta</NavigationMenuLink>
                      <NavigationMenuLink>Sábado</NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Local</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[420px]">
                      <NavigationMenuLink>Itaum</NavigationMenuLink>
                      <NavigationMenuLink>Guanabara</NavigationMenuLink>
                      <NavigationMenuLink>Comasa</NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <Separator className="mt-2" />
      </header>
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

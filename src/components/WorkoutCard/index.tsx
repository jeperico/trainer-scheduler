import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import IExercise from '@/interfaces/exercise';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import formatTime from '@/utils/format-time';
import formatDay from '@/utils/format-day';
import IWorkout from '@/interfaces/workout';

interface WorkoutCardProps {
  data: IWorkout;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ data }) => {
  const startTime =
    data.team.day && data.team.day.length > 0
      ? formatTime(
          data.team.day[0].startTime.hours,
          data.team.day[0].startTime.minutes
        )
      : '00:00';
  const endTime =
    data.team.day && data.team.day.length > 0
      ? formatTime(
          data.team.day[0].endTime.hours,
          data.team.day[0].endTime.minutes
        )
      : '00:00';

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{`${data.team.name} ${data.team.gender}, ${data.team.location}`}</CardTitle>
        <Separator />
        <CardDescription>
          {`[${formatDay(data.date)}] ${startTime} até ${endTime}.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>Objetivo: {data.objective}</p>
        <Accordion type="single" collapsible>
          <AccordionItem value="Exercises">
            <AccordionTrigger>Exercícios:</AccordionTrigger>
            <AccordionContent>
              <Separator className="mb-4" />
              {data.exercises.map((exercise: IExercise, index: number) => {
                return (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg mb-2">
                    <p className="text-gray-800 mb-1">
                      <strong>
                        {exercise.title} - {exercise.duration} minutos
                      </strong>
                    </p>
                    <p className="text-gray-800 mb-1">
                      Descrição: {exercise.description}
                    </p>
                    <p className="text-gray-800 mb-1">
                      Objetivos: {exercise.objectives}
                    </p>
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex justify-between mt-auto">
        <Button variant="destructive">Excluir</Button>
        <Button asChild>
          <Link href={`/new-workout?id=${data.team.id}`}>Editar</Link>
        </Button>
        <Button variant="outline">Copiar</Button>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;

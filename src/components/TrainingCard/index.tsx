import ITraining from '@/interfaces/training';
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
import { Button } from '../ui/button';
import IExercise from '@/interfaces/exercise';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

interface TrainingCardProps {
  data: ITraining;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ data }) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{`${data.team.name} ${data.team.gender}, ${data.team.location}`}</CardTitle>
        <Separator />
        <CardDescription>
          {`${data.date} - ${data.team.day[0].startTime} ${data.team.day[0].endTime}`}
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
        <Button>Editar</Button>
        <Button variant="outline">Copiar</Button>
      </CardFooter>
    </Card>
  );
};

export default TrainingCard;

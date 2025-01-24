import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import IExercise from "@/interfaces/exercise";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import formatTime from "@/utils/format-time";
import formatDay from "@/utils/format-day";
import IWorkout from "@/interfaces/workout";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { AlertDialogHeader, AlertDialogFooter } from "../ui/alert-dialog";
import { delWorkoutByID } from "@/provider/api";
import CopyButton from "../CopyButton";

interface WorkoutCardProps {
  data: IWorkout;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ data }) => {
  const startTime =
    data.team.day && data.team.day.length > 0
      ? formatTime(
          data.team.day[0].startTime.hours,
          data.team.day[0].startTime.minutes,
        )
      : "00:00";
  const endTime =
    data.team.day && data.team.day.length > 0
      ? formatTime(
          data.team.day[0].endTime.hours,
          data.team.day[0].endTime.minutes,
        )
      : "00:00";

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
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-9 px-4 py-2">
              Excluir
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                exercise and remove your data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => delWorkoutByID(data.id)}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button asChild>
          <Link href={`/new-workout?id=${data.id}`}>Editar</Link>
        </Button>
        <CopyButton
          text={`Turma: ${data.team.name} - ${data.date}; \nBairro: ${data.team.location}; \nObjetivo do treino: ${data.objective} \n\nExercícios: \n${data.exercises
            .map((exercise: IExercise) => {
              return `${exercise.title} - ${exercise.duration} minutos \n${exercise.description}\n${exercise.objectives}`;
            })
            .join("\n\n")}`}
        />
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;

'use client';

import React, { useEffect, useState } from 'react';
import FormArea from '@/components/FormArea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AddExercise from './new-workout-form/add-exercise';
import IExercise from '@/interfaces/exercise';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import DeleteExercise from './new-workout-form/delete-exercise';
import SelectTeam from './new-workout-form/select-team';
import {
  del,
  get,
  getTeamById,
  getTeamByName,
  getWorkoutById,
  post,
} from '@/provider/api';
import { useSearchParams } from 'next/navigation';
import IWorkout from '@/interfaces/workout';
import formatDate from '@/utils/format-date';
import { v4 as uuidv4 } from 'uuid';

const NewWorkout = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [objectives, setObjectives] = useState<string>('');
  const [duration, setDuration] = useState<number>(0);

  const handleExercise = () => {
    setExercises([
      ...exercises,
      {
        title: title,
        description: description,
        objectives: objectives,
        duration: duration,
      },
    ]);
    setTitle('');
    setDescription('');
    setObjectives('');
    setDuration(0);
  };

  const deleteExercise = (index: number) => {
    return () => {
      const newExercises = exercises.filter((_, i) => i !== index);
      setExercises(newExercises);
    };
  };

  const [editableData, setEditableData] = useState<IWorkout | undefined>();
  const [selectedTeam, setSelectedTeam] = useState<string | undefined>(
    editableData?.team.name
  );

  const searchParams = useSearchParams();
  useEffect(() => {
    const id = searchParams.get('id');
    if (!id) return;
    const workout = getWorkoutById(id);
    setEditableData(workout);
    if (workout) setExercises(workout.exercises);
  }, [searchParams]);

  const handleWorkout = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    const workoutData: IWorkout = {
      id: uuidv4(),
      team: selectedTeam
        ? getTeamById(selectedTeam)
        : getTeamByName('Baby Iniciante'),
      objective: e.currentTarget.objective.value,
      date: e.currentTarget.date.value,
      exercises: exercises,
    };
    if (handleEditedWorkout(workoutData)) return;
    post('workouts-data', workoutData);
  };

  const handleEditedWorkout = (data: IWorkout) => {
    if (!editableData) return false;
    const current = get('workouts-data');
    del('workouts-data');
    const newCurrent = current.filter((workout: IWorkout) => {
      return workout.id !== editableData.id;
    });
    const newData = [data, ...newCurrent];
    newData.forEach((workout: IWorkout) => post('workouts-data', workout));
    return true;
  };

  return (
    <FormArea onSubmit={handleWorkout}>
      <div className="grid w-full items-center gap-4">
        <div className="flex justify-between gap-4">
          <SelectTeam
            name="team"
            {...(editableData && { editableData: editableData })}
            setSelectedTeam={setSelectedTeam}
          />

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="date">Dia</Label>
            <Input
              id="date"
              name="date"
              type="date"
              {...(editableData && {
                defaultValue: formatDate(editableData.date),
              })}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="objective">Objetivo</Label>
          <Textarea
            id="objective"
            name="objective"
            placeholder="Objetivo do treino"
            {...(editableData && {
              defaultValue: editableData.objective,
            })}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="data">Exercícios:</Label>
          <AddExercise
            groupedSetters={{
              title: setTitle,
              description: setDescription,
              objectives: setObjectives,
              duration: setDuration,
            }}
            groupedGetters={{
              title: title,
              description: description,
              objectives: objectives,
              duration: duration,
            }}
            handleExercise={handleExercise}
          />
          {exercises.length > 0 && (
            <ScrollArea className="my-4 rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">
                  Atividades
                </h4>
                {exercises.map((exercise, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex justify-between items-center">
                      <p>
                        <strong>
                          {exercise.duration} Min -{' ' + exercise.title}
                        </strong>
                      </p>
                      <DeleteExercise
                        deleteExercise={deleteExercise}
                        index={index}
                      />
                    </div>
                    <Separator className="my-2" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
    </FormArea>
  );
};

export default NewWorkout;

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { z } from 'zod';
import FormArea from '@/components/FormArea';
import { useForm } from 'react-hook-form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AddExercise from './add-exercise';

interface NewTrainingFormProps {
  handleTraining: (data: TrainingSchema) => void;
}

const trainingSchema = z.object({
  team: z.object({
    name: z.string().min(2, {
      message: 'O nome da equipe deve ter no mínimo 2 caracteres',
    }),
    gender: z.enum(['Masculino', 'Feminino']),
    day: z.array(
      z.object({
        weekday: z.enum([
          'sunday',
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday',
        ]),
        startTime: z.string(),
        endTime: z.string(),
      })
    ),
    location: z.enum([
      'Guanabara',
      'Comasa',
      'Centro',
      'Costa e Silva',
      'Atiradores',
      'Bucarein',
      'Itaum',
      'Oficina',
    ]),
  }),
  objective: z.string().min(3, {
    message: 'O objetivo deve ter no mínimo 3 caracteres',
  }),
  date: z.date(),
  exercises: z.array(
    z.object({
      title: z.string().min(2, {
        message: 'O título deve ter no mínimo 2 caracteres',
      }),
      description: z.string().min(3, {
        message: 'A descrição deve ter no mínimo 3 caracteres',
      }),
      objectives: z.string(),
      duration: z
        .number()
        .min(1, {
          message: 'A duração deve ser de no mínimo 1 minuto',
        })
        .max(120, { message: 'A duração deve ser de no máximo 120 minutos' }),
    })
  ),
});

export type TrainingSchema = z.infer<typeof trainingSchema>;

const NewTrainingForm: React.FC<NewTrainingFormProps> = ({
  handleTraining,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrainingSchema>({
    resolver: zodResolver(trainingSchema),
  });
  return (
    <FormArea onSubmit={handleSubmit(handleTraining)}>
      <div className="grid w-full items-center gap-4">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col space-y-1.5 flex-1">
            <Label htmlFor="team">Equipe</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o time" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Feminino</SelectLabel>
                  <SelectItem value="1">Time 1</SelectItem>
                  <SelectItem value="2">Time 2</SelectItem>
                  <SelectItem value="3">Time 3</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Masculino</SelectLabel>
                  <SelectItem value="1b">Time 1b</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="date">Dia</Label>
            <Input
              id="date"
              name="date"
              type="date"
              register={register}
              errors={errors.date}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="objective">Objetivo</Label>
          <Textarea
            id="objective"
            name="objective"
            placeholder="Objetivo do treino"
            register={register}
            errors={errors.objective}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="data">Exercícios:</Label>
          <AddExercise register={register} errors={errors.date}></AddExercise>
          {/* <ul>
            {exercises.map((exercise, index) => (
              <li key={index}>
                <strong>{exercise.name}</strong>: {exercise.notes}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </FormArea>
  );
};

export default NewTrainingForm;

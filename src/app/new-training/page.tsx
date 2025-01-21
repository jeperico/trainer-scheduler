'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'A data deve estar no formato YYYY-MM-DD'),
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

const NewTraining = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrainingSchema>({
    resolver: zodResolver(trainingSchema),
  });

  async function onSubmit(data: TrainingSchema) {
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-[444px]">
          <CardHeader className="flex items-center">
            <CardTitle>Cadastrar Treino</CardTitle>
            <CardDescription>
              Cadastre as atividades dos próximos treinos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <input type="text" {...register('objective')} />
            {errors && <p>{errors.objective?.message}</p>}
            <input type="text" {...register('team.name')} />
            {errors && <p>{errors.team?.name?.message}</p>}
            <p>HERE</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Cadastrar</Button>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
};

export default NewTraining;

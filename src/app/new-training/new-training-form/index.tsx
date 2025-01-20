'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { z } from 'zod';
import FormArea from '@/components/FormArea';
import { useForm } from 'react-hook-form';

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
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm<TrainingSchema>({
    resolver: zodResolver(trainingSchema),
  });
  return (
    <FormArea onSubmit={handleSubmit(handleTraining)}>
      <h1>New Training Form</h1>
    </FormArea>
  );
};

export default NewTrainingForm;

import { z } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const workoutSchema = z.object({
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

export type WorkoutSchema = z.infer<typeof workoutSchema>;

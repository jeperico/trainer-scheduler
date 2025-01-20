// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogTitle,
//   DialogDescription,
// } from '@/components/ui/dialog';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import React, { useState } from 'react';
// import { z } from 'zod';
// import { Button } from '@/components/ui/button';
// import { DialogHeader, DialogFooter } from '@/components/ui/dialog';
// import { Textarea } from '@/components/ui/textarea';
// import IExercise from '@/interfaces/exercise';

// interface AddExerciseProps {
//   handleExercise: (data: ExerciseSchema) => void;
// }

// const exerciseSchema = z.object({
//   title: z.string().min(2, {
//     message: 'O título deve ter no mínimo 2 caracteres',
//   }),
//   description: z.string().min(3, {
//     message: 'A descrição deve ter no mínimo 3 caracteres',
//   }),
//   objectives: z.string(),
//   duration: z
//     .number()
//     .min(1, {
//       message: 'A duração deve ser de no mínimo 1 minuto',
//     })
//     .max(120, { message: 'A duração deve ser de no máximo 120 minutos' }),
// });

// export type ExerciseSchema = z.infer<typeof exerciseSchema>;

// const AddExercise: React.FC<AddExerciseProps> = ({ handleExercise }) => {
//   const [exercises, setExercises] = useState<IExercise[]>([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [objectives, setObjectives] = useState('');
//   const [duration, setDuration] = useState(0);

//   const handleExercise = () => {
//     setExercises([
//       ...exercises,
//       {
//         title: title,
//         description: description,
//         objectives: objectives,
//         duration: duration,
//       },
//     ]);
//     setTitle('');
//     setDescription('');
//     setObjectives('');
//     setDuration(0);
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Adicionar Exercício</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Adicionar Exercício</DialogTitle>
//           <DialogDescription>
//             Adicione os detalhes do exercício abaixo.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="">
//           <div>
//             <Label htmlFor="title">Título</Label>
//             <Input
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="col-span-3"
//             />
//           </div>
//         </div>
//         <DialogFooter>
//           <Button type="button" onClick={handleExercise}>
//             Adicionar
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AddExercise;

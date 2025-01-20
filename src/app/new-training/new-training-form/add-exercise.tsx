import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import IExercise from '@/interfaces/exercise';

interface AddExerciseProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
}

const AddExercise: React.FC<AddExerciseProps> = ({ register, errors }) => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objectives, setObjectives] = useState('');
  const [duration, setDuration] = useState(0);

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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Adicionar Exercício</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Exercício</DialogTitle>
          <DialogDescription>
            Adicione os detalhes do exercício abaixo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid w-full items-center gap-4">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                name="title"
                type="text"
                register={register}
                errors={errors?.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5 w-60">
              <Label htmlFor="duration">Duração (minutos)</Label>
              <Input
                id="duration"
                name="duration"
                type="number"
                register={register}
                errors={errors?.duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Descrição do exercício"
              register={register}
              errors={errors?.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="objective">Objetivo</Label>
            <Textarea
              id="objective"
              name="objective"
              placeholder="Objetivo do treino"
              register={register}
              errors={errors?.objective}
              onChange={(e) => setObjectives(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleExercise}>
            Adicionar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddExercise;

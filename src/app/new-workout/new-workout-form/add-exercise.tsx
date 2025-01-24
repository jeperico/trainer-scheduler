import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import IExercise from "@/interfaces/exercise";

interface IGroupedSetters {
  title: React.Dispatch<React.SetStateAction<string>>;
  description: React.Dispatch<React.SetStateAction<string>>;
  objectives: React.Dispatch<React.SetStateAction<string>>;
  duration: React.Dispatch<React.SetStateAction<number>>;
}

interface AddExerciseProps {
  groupedSetters: IGroupedSetters;
  groupedGetters: IExercise;
  handleExercise: () => void;
}

const AddExercise: React.FC<AddExerciseProps> = ({
  groupedSetters,
  groupedGetters,
  handleExercise,
}) => {
  const handleSetter = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: keyof IGroupedSetters,
  ) => {
    return setter === "duration"
      ? groupedSetters[setter](Number(e.target.value))
      : groupedSetters[setter](e.target.value);
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
                value={groupedGetters.title}
                onChange={(e) => handleSetter(e, "title")}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5 w-60">
              <Label htmlFor="duration">Duração (minutos)</Label>
              <Input
                id="duration"
                name="duration"
                type="number"
                value={groupedGetters.duration}
                onChange={(e) => handleSetter(e, "duration")}
                required
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              name="description"
              value={groupedGetters.description}
              placeholder="Descrição do exercício"
              onChange={(e) => handleSetter(e, "description")}
              required
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="objectives">Objetivo</Label>
            <Textarea
              id="objectives"
              name="objectives"
              value={groupedGetters.objectives}
              placeholder="Objetivo do treino"
              onChange={(e) => handleSetter(e, "objectives")}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={handleExercise}>
              Adicionar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddExercise;

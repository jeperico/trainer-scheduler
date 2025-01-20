'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
// import AddExercise from '@/components/AddExercise';

const Home = () => {
  return (
    <Card className="w-[444px]">
      <CardHeader className="flex items-center">
        <CardTitle>Cadastrar Treino</CardTitle>
        <CardDescription>
          Cadastre as atividades dos próximos treinos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
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
                <Input id="date" type="date" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="objective">Objetivo</Label>
              <Textarea id="objective" placeholder="Objetivo do treino" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="data">Exercícios:</Label>
              {/* <AddExercise></AddExercise> */}
              {/* <ul>
                {exercises.map((exercise, index) => (
                  <li key={index}>
                    <strong>{exercise.name}</strong>: {exercise.notes}
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export default Home;

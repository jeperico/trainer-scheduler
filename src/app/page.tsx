'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import React from 'react';

const Home = () => {
  return (
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
        </div>
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="objective">Objetivo</Label>
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
  );
};

export default Home;

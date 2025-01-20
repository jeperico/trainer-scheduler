'use client';

import React from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card';

interface IFormAreaProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (e: any) => void;
}

const FormArea: React.FC<IFormAreaProps> = ({ children, onSubmit }) => {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Card className="w-[444px]">
        <CardHeader className="flex items-center">
          <CardTitle>Cadastrar Treino</CardTitle>
          <CardDescription>
            Cadastre as atividades dos próximos treinos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>{children}</form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default FormArea;

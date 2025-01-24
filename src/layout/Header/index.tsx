import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';
import NavMenu from './components/nav-menu';
import { get } from '@/provider/api';
import ITeam from '@/interfaces/team';

const Header = () => {
  return (
    <header className="mx-auto w-[90vw] max-w-[1240px] my-4">
      <div className="flex justify-between items-center">
        <Button asChild className="bg-green-600 text-white hover:bg-green-700">
          <Link href="/new-workout">Criar novo treino</Link>
        </Button>
        <div className="flex gap-4">
          <NavMenu title="Gênero" filters={['Masculino', 'Feminino']} />
          <NavMenu
            title="Nome"
            filters={get('teams-data').map((team: ITeam) => team.name)}
          />
          <NavMenu
            title="Local"
            filters={[
              'Atiradores',
              'Bucarein',
              'Comasa',
              'Costa e Silva',
              'Itaum',
              'Oficina',
            ]}
          />
          <NavMenu
            title="Dia da Semana"
            filters={[
              'Domingo',
              'Segunda',
              'Terça',
              'Quarta',
              'Quinta',
              'Sexta',
              'Sábado',
            ]}
          />
        </div>
      </div>
      <Separator className="mt-2" />
    </header>
  );
};

export default Header;

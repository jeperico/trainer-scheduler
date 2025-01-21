import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="mx-auto w-[90vw] max-w-[1240px] mt-32 mb-8">
      <div className="flex justify-between items-center">
        <Button asChild className="bg-green-600 text-white hover:bg-green-700">
          <Link href="/new-training">Criar novo treino</Link>
        </Button>
        <div className="flex gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Gênero</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[420px]">
                    <NavigationMenuLink>Masculino</NavigationMenuLink>
                    <NavigationMenuLink>Feminino</NavigationMenuLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Nome</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[420px]">
                    <NavigationMenuLink>Iniciante Feminino</NavigationMenuLink>
                    <NavigationMenuLink>
                      Intermediário Masculino
                    </NavigationMenuLink>
                    <NavigationMenuLink>Competição Feminino</NavigationMenuLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Dia da Semana</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[420px]">
                    <NavigationMenuLink>Domingo</NavigationMenuLink>
                    <NavigationMenuLink>Segunda</NavigationMenuLink>
                    <NavigationMenuLink>Terça</NavigationMenuLink>
                    <NavigationMenuLink>Quarta</NavigationMenuLink>
                    <NavigationMenuLink>Quinta</NavigationMenuLink>
                    <NavigationMenuLink>Sexta</NavigationMenuLink>
                    <NavigationMenuLink>Sábado</NavigationMenuLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Local</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[420px]">
                    <NavigationMenuLink>Itaum</NavigationMenuLink>
                    <NavigationMenuLink>Guanabara</NavigationMenuLink>
                    <NavigationMenuLink>Comasa</NavigationMenuLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <Separator className="mt-2" />
    </header>
  );
};

export default Header;

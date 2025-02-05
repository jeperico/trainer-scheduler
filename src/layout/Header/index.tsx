import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { Menubar } from "@/components/ui/menubar";
import NavMenu from "./components/nav-menu";
import {
  get,
  getWorkoutsByDay,
  getWorkoutsByPolo,
  getWorkoutsByTeam,
} from "@/provider/api";
import ITeam from "@/interfaces/team";

const Header = () => {
  return (
    <header className="mx-auto w-[90vw] max-w-[1240px] my-4">
      <div className="flex justify-between items-center">
        <Button asChild className="bg-green-600 text-white hover:bg-green-700">
          <Link href="/new-workout">Criar novo treino</Link>
        </Button>
        <Menubar className="flex gap-4">
          <NavMenu
            title="Equipe"
            filters={get("teams-data").map((team: ITeam) => {
              return {
                name: team.name,
                isDisabled: getWorkoutsByTeam(team.name).length === 0,
              };
            })}
          />
          <NavMenu
            title="Polo"
            filters={Array.from(
              new Set(get("teams-data").map((team: ITeam) => team.polo)),
            ).map((polo) => {
              const poloName = polo as string;
              return {
                name: poloName,
                isDisabled: getWorkoutsByPolo(poloName).length === 0,
              };
            })}
          />
          <NavMenu
            title="Dia da Semana"
            filters={[
              "Domingo",
              "Segunda",
              "Terça",
              "Quarta",
              "Quinta",
              "Sexta",
              "Sábado",
            ].map((day) => {
              return {
                name: day,
                isDisabled: getWorkoutsByDay(day).length === 0,
              };
            })}
          />
        </Menubar>
      </div>
      <Separator className="mt-2" />
    </header>
  );
};

export default Header;

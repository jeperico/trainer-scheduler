import React from 'react';
import ITeam from '@/interfaces/team';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { get } from '@/provider/api';
import { UseFormRegister } from 'react-hook-form';

interface SelectTeamProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
}

const SelectTeam: React.FC<SelectTeamProps> = ({ register }) => {
  const fetchTeams = (gender: string) => {
    const teams = get('teams-data');

    return teams.filter((team: ITeam) => team.gender === gender);
  };

  const handleSelect = (e: string) => {
    console.log(e);
  };

  return (
    <div className="flex flex-col space-y-1.5 flex-1">
      <Label htmlFor="team">Equipe</Label>
      <Select onValueChange={handleSelect}>
        <SelectTrigger name="team" register={register}>
          <SelectValue placeholder="Selecione o time" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Feminino</SelectLabel>
            {fetchTeams('Feminino').map((team: ITeam) => (
              <SelectItem key={team.id} value={team.id}>
                {team.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Masculino</SelectLabel>
            {fetchTeams('Masculino').map((team: ITeam) => (
              <SelectItem key={team.id} value={team.id}>
                {team.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectTeam;

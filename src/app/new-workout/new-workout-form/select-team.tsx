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
import { getTeamsByGender } from '@/provider/api';
import { UseFormRegister } from 'react-hook-form';
import IWorkout from '@/interfaces/workout';

interface SelectTeamProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  handleSelect: (e: string) => void;
  editableData: IWorkout;
}

const SelectTeam: React.FC<SelectTeamProps> = ({
  register,
  handleSelect,
  editableData,
}) => {
  // console.log('SelectTeam: ', editableData);

  return (
    <div className="flex flex-col space-y-1.5 flex-1">
      <Label htmlFor="team">Equipe</Label>
      <Select onValueChange={handleSelect} defaultValue={editableData?.team.id}>
        <SelectTrigger name="team" register={register}>
          <SelectValue placeholder="Selecione o time" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Feminino</SelectLabel>
            {getTeamsByGender('Feminino').map((team: ITeam) => (
              <SelectItem key={team.id} value={team.id}>
                {team.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Masculino</SelectLabel>
            {getTeamsByGender('Masculino').map((team: ITeam) => (
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

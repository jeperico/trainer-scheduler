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
import { getTeamById, getTeamsByGender } from '@/provider/api';
import { UseFormRegister } from 'react-hook-form';

interface SelectTeamProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  handleSelect: (e: string) => void;
  presetValue?: string;
}

const SelectTeam: React.FC<SelectTeamProps> = ({
  register,
  handleSelect,
  presetValue,
}) => {
  if (presetValue)
    console.log(
      'SelectTeam: ',
      getTeamById('91bd569e-1730-4cc3-bd15-3e6119e37cbb')
    );
  return (
    <div className="flex flex-col space-y-1.5 flex-1">
      <Label htmlFor="team">Equipe</Label>
      <Select onValueChange={handleSelect} defaultValue={presetValue}>
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

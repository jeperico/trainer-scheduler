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
import IWorkout from '@/interfaces/workout';

interface SelectTeamProps {
  editableData?: IWorkout;
}

const SelectTeam: React.FC<SelectTeamProps> = ({ editableData }) => {
  // console.log('SelectTeam: ', editableData);

  return (
    <div className="flex flex-col space-y-1.5 flex-1">
      <Label htmlFor="team">Equipe</Label>
      <Select
        // defaultValue={editableData?.team.id}
        value={editableData?.team.id}
        // {...(editableData && { defaultValue: editableData.team.id })}
      >
        <SelectTrigger name="team">
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

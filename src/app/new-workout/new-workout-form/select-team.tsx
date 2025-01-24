import React, { useEffect } from 'react';
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
  name: string;
  editableData?: IWorkout;
  setSelectedTeam: (team: string) => void;
}

const SelectTeam: React.FC<SelectTeamProps> = ({
  editableData,
  name,
  setSelectedTeam,
}) => {
  useEffect(() => {
    if (editableData?.team.id) {
      setSelectedTeam(editableData.team.id);
    }
  }, [editableData]);

  const handle = (team: string) => {
    setSelectedTeam(team);
  };

  return (
    <div className="flex flex-col space-y-1.5 flex-1">
      <Label htmlFor={name}>Equipe</Label>
      <Select onValueChange={handle}>
        <SelectTrigger name={name}>
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

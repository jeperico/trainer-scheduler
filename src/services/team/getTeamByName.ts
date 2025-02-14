import ITeam from "@/interfaces/team";
import { get } from "@/provider/api";

const getTeamByName = (name: string) => {
  const teams = get("teams-data");

  return teams.find((team: ITeam) => team.name === name);
};

export default getTeamByName;

import ITeam from "@/interfaces/team";
import { get } from "@/provider/api";

const getTeamById = (id: string) => {
  const teams = get("teams-data");

  return teams.find((team: ITeam) => team.id === id);
};

export default getTeamById;

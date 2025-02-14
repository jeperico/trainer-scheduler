import ITeam from "@/interfaces/team";
import { get } from "@/provider/api";

const getTeamsByGender = (gender: string) => {
  const teams = get("teams-data");

  return teams.filter((team: ITeam) => team.gender === gender);
};

export default getTeamsByGender;

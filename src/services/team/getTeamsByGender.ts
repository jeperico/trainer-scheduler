import ITeam from "@/interfaces/team";
import { get } from "@/provider/api";

/**
 * Get the team data using gender
 *
 * @param {string} gender - The team gender
 * @return {Array<ITeam>} - The team data
 * @example
 * const teams = getTeamsByGender("Masculino");
 */

const getTeamsByGender = (gender: string): Array<ITeam> => {
  const teams = get("teams-data");

  return teams.filter((team: ITeam) => team.gender === gender);
};

export default getTeamsByGender;

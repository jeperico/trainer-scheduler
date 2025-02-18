import ITeam from "@/interfaces/team";
import { get } from "@/provider/api";

/**
 * Get the team data using name
 *
 * @param {string} name - The team name
 * @return {ITeam} - The team data
 * @example
 * const team = getTeamByName("example");
 */

const getTeamByName = (name: string): ITeam => {
  const teams = get("teams-data");

  return teams.find((team: ITeam) => team.name === name);
};

export default getTeamByName;

import ITeam from "@/interfaces/team";
import { get } from "@/provider/api";

/**
 * @description Get the team data using name
 * @module services/team/getTeamByName
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

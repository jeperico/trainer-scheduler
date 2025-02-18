import ITeam from "@/interfaces/team";
import { get } from "@/provider/api";

/**
 * Get the team data using id
 *
 * @param {string} id - The team id
 * @return {ITeam} - The team data
 * @example
 * const team = getTeamById("uuid_example");
 */

const getTeamById = (id: string): ITeam => {
  const teams = get("teams-data");

  return teams.find((team: ITeam) => team.id === id);
};

export default getTeamById;

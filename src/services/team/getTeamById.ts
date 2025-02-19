import ITeam from "@/interfaces/team";
import { get } from "@/provider/api";

/**
 * @description Get the team data using id
 * @module services/team/getTeamById
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

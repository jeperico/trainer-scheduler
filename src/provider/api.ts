import ITeam from '@/interfaces/team';

export const get = (uri: string) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const data = JSON.parse(localStorage.getItem(uri) || '[]');

    return data;
  }
  return [];
};

export const post = (uri: string, data: object) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(uri, JSON.stringify(data));

    const workoutData = JSON.parse(localStorage.getItem(uri) || '[]');

    return workoutData;
  }
  return [];
};

export const getTeamByName = (name: string) => {
  const teams = get('teams-data');

  return teams.find((team: ITeam) => team.name === name);
};

export const getTeamById = (id: string) => {
  const teams = get('teams-data');

  return teams.find((team: ITeam) => team.id === id);
};

export const getTeamsByGender = (gender: string) => {
  const teams = get('teams-data');

  return teams.filter((team: ITeam) => team.gender === gender);
};

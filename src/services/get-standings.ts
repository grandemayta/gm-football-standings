import { StandingsRequest, StandingsResponse } from '@models';

export const getStandings = async (standingsRequest: StandingsRequest): Promise<StandingsResponse> => {
  const baseUrl = 'https://api.football-data.org/v2';
  const { competition, season, publicKey } = standingsRequest;
  const standingsEndpoint = `competitions/${competition}/standings?season=${season}`
  const headers = { 'X-Auth-Token': publicKey };
  
  const response = await fetch(`${baseUrl}/${standingsEndpoint}`, { headers });
  const data = await response.json();

  return { competition: data.competition, standings: data.standings[0].table };
};
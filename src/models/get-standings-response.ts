export interface StandingsResponse {
  competition: Competition;
  standings: Array<Standing>;
}

export interface Competition {
  id: number;
  lastUpdated: string;
  name: string;
}

export interface Standing {
  draw: number;
  goalDifference: number;
  goalsAgainst: number;
  goalsFor: number;
  lost: number;
  playedGames: number;
  points: number;
  position: number;
  team: Team
  won: number;
}

export interface Team {
  id: number;
  name: string;
  crestUrl: string;
}
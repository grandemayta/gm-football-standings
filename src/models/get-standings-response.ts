export interface StandingsResponse {
  competition: Competition;
  standings: {
    total: Array<Standing>;
    home: Array<Standing>;
    away: Array<Standing>;
  }
}

export enum StandingType {
  TOTAL = 'total',
  HOME = 'home',
  AWAY = 'away'
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
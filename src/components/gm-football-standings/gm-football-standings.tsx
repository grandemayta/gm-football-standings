import { Component, h, Prop, State } from '@stencil/core';
import { getStandings } from '@services';
import { StandingsRequest, StandingsResponse } from '@models';

@Component({
  tag: 'gm-football-standings',
  styleUrl: 'gm-football-standings.scss',
  shadow: true,
})
export class GmFootballStandings {
  @Prop() competition: string;
  @Prop() season: number;
  @Prop() publicKey: string;
  @State() standingsResponse: StandingsResponse;

  async componentWillLoad() {
    const standingsRequest: StandingsRequest = {
      competition: this.competition,
      season: this.season,
      publicKey: this.publicKey
    };
  
    this.standingsResponse = await getStandings(standingsRequest);
    console.log(this.standingsResponse);
  }

  render() {
    const { standings } = this.standingsResponse;
    return (
      <table>
        <gm-standing-header />
        {standings.map(standing => 
          <gm-standing-row
            position={standing.position}
            name={standing.team.name}
            imageUrl={standing.team.crestUrl}
            playedGames={standing.playedGames}
            won={standing.won}
            draw={standing.draw}
            lost={standing.lost}
            goalsFor={standing.goalsFor}
            goalsAgainst={standing.goalsAgainst}
            goalDifference={standing.goalDifference}
            points={standing.points}
            />
        )}
      </table>
    );
  }
}

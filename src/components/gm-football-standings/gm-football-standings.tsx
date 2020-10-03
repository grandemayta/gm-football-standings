import { Component, h, Prop, State, Host, Listen} from '@stencil/core';
import { getStandings } from '@services';
import { StandingsRequest, StandingsResponse, Standing } from '@models';

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
  @State() currentStanding: Array<Standing>;

  @Listen('switchPanel')
  switchPanelHandler(event: CustomEvent<string>) {
    const type = event.detail;
    this.currentStanding = this.standingsResponse.standings[type];
  }

  async componentWillLoad() {
    const standingsRequest: StandingsRequest = {
      competition: this.competition,
      season: this.season,
      publicKey: this.publicKey
    };
  
    this.standingsResponse = await getStandings(standingsRequest);
    this.currentStanding = this.standingsResponse.standings.total;
  }

  render() {
    return (
      <Host>
        <gm-standing-panel />
        <table>
          <gm-standing-header />
          {this.currentStanding.map(standing => 
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
      </Host>
    );
  }
}

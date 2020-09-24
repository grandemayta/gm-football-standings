import { Component, h, Prop } from '@stencil/core';
import { getStandings } from '@services';
import { StandingsRequest } from '@models';

@Component({
  tag: 'gm-football-standings',
  styleUrl: 'gm-football-standings.scss',
  shadow: true,
})
export class GmFootballStandings {
  @Prop() competition: string;
  @Prop() season: number;
  @Prop() publicKey: string;

  async connectedCallback() {
    const standingsRequest: StandingsRequest = {
      competition: this.competition,
      season: this.season,
      publicKey: this.publicKey
    };
  
    const response = await getStandings(standingsRequest);
    console.log(response);
  }

  render() {
    return (
      <table>
          <tr>
            <th colSpan={2}>TEAMS</th>
            <th>MP</th>
            <th class="hide-cell">W</th>
            <th class="hide-cell">D</th>
            <th class="hide-cell">L</th>
            <th class="hide-cell">GF</th>
            <th>PTS</th>
          </tr>
    
          <tr>
            <td>1</td>
            <td>
              <img class="hide-cell" src="" />
              Inter
            </td>
            <td>22</td>
            <td class="hide-cell">22</td>
            <td class="hide-cell">22</td>
            <td class="hide-cell">22</td>
            <td class="hide-cell">22</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img class="hide-cell" src="" />
              Inter
            </td>
            <td>22</td>
            <td class="hide-cell">22</td>
            <td class="hide-cell">22</td>
            <td class="hide-cell">22</td>
            <td class="hide-cell">22</td>
            <td>100</td>
          </tr>
        </table>
    );
  }
}

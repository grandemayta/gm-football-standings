import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'gm-standing-row',
  styleUrl: 'gm-standing-row.scss',
  shadow: true,
})
export class GmStandingRow {
  @Prop() position: number;
  @Prop() name: string;
  @Prop() imageUrl: string;
  @Prop() draw: number;
  @Prop() goalDifference: number;
  @Prop() goalsAgainst: number;
  @Prop() goalsFor: number;
  @Prop() lost: number;
  @Prop() playedGames: number;
  @Prop() points: number;
  @Prop() won: number;

  render() {
    return (
      <Host>
        <td>{this.position}</td>
        <td>
          <img src={this.imageUrl} />
          <span>{this.name}</span>
        </td>
        <td class="hide-mobile show-tablet">{this.playedGames}</td>
        <td class="hide-mobile">{this.won}</td>
        <td class="hide-mobile">{this.draw}</td>
        <td class="hide-mobile">{this.lost}</td>
        <td class="hide-mobile">{this.goalsFor}</td>
        <td class="hide-mobile">{this.goalsAgainst}</td>
        <td class="hide-mobile">{this.goalDifference}</td>
        <td>{this.points}</td>
      </Host>
    );
  }

}

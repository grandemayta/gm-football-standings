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
        <td>{this.playedGames}</td>
        <td class="hide-cell">{this.won}</td>
        <td class="hide-cell">{this.draw}</td>
        <td class="hide-cell">{this.lost}</td>
        <td class="hide-cell">{this.goalsFor}</td>
        <td class="hide-cell">{this.goalsAgainst}</td>
        <td class="hide-cell">{this.goalDifference}</td>
        <td>{this.points}</td>
      </Host>
    );
  }

}

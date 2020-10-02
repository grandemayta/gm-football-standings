import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'gm-standing-header',
  styleUrl: 'gm-standing-header.scss',
  shadow: true,
})
export class GmStandingHeader {

  render() {
    return (
      <Host>
        <th></th>
        <th>Squadre</th>
        <th>G</th>
        <th class="hide-cell">V</th>
        <th class="hide-cell">N</th>
        <th class="hide-cell">P</th>
        <th class="hide-cell">GF</th>
        <th class="hide-cell">GS</th>
        <th class="hide-cell">+/-</th>
        <th>PTI</th>
      </Host>
    );
  }

}

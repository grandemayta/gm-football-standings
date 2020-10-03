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
        <th class="logo-team-name">Squadre</th>
        <th class="hide-mobile show-tablet">G</th>
        <th class="hide-mobile">V</th>
        <th class="hide-mobile">N</th>
        <th class="hide-mobile">P</th>
        <th class="hide-mobile">GF</th>
        <th class="hide-mobile">GS</th>
        <th class="hide-mobile">+/-</th>
        <th>PTI</th>
      </Host>
    );
  }

}

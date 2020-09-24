import { newSpecPage } from '@stencil/core/testing';
import { GmFootballStandings } from '../gm-football-standings';

describe('gm-football-standings', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GmFootballStandings],
      html: `<gm-football-standings></gm-football-standings>`,
    });
    expect(page.root).toEqualHtml(`
      <gm-football-standings>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gm-football-standings>
    `);
  });
});

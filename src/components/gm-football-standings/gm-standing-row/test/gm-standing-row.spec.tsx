import { newSpecPage } from '@stencil/core/testing';
import { GmStandingRow } from '../gm-standing-row';

describe('gm-standing-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GmStandingRow],
      html: `<gm-standing-row></gm-standing-row>`,
    });
    expect(page.root).toEqualHtml(`
      <gm-standing-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gm-standing-row>
    `);
  });
});

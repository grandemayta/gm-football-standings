import { newSpecPage } from '@stencil/core/testing';
import { GmStandingHeader } from '../gm-standing-header';

describe('gm-standing-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GmStandingHeader],
      html: `<gm-standing-header></gm-standing-header>`,
    });
    expect(page.root).toEqualHtml(`
      <gm-standing-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gm-standing-header>
    `);
  });
});

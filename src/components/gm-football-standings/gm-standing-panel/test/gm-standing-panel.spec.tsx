import { newSpecPage } from '@stencil/core/testing';
import { GmStandingPanel } from '../gm-standing-panel';

describe('gm-standing-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GmStandingPanel],
      html: `<gm-standing-panel></gm-standing-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <gm-standing-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gm-standing-panel>
    `);
  });
});

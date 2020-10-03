import { newE2EPage } from '@stencil/core/testing';

describe('gm-standing-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gm-standing-panel></gm-standing-panel>');

    const element = await page.find('gm-standing-panel');
    expect(element).toHaveClass('hydrated');
  });
});

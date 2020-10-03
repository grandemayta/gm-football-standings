import { newE2EPage } from '@stencil/core/testing';

describe('gm-standing-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gm-standing-row></gm-standing-row>');

    const element = await page.find('gm-standing-row');
    expect(element).toHaveClass('hydrated');
  });
});

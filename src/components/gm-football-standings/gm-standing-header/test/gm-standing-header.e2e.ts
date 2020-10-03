import { newE2EPage } from '@stencil/core/testing';

describe('gm-standing-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gm-standing-header></gm-standing-header>');

    const element = await page.find('gm-standing-header');
    expect(element).toHaveClass('hydrated');
  });
});

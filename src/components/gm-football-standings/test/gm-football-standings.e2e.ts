import { newE2EPage } from '@stencil/core/testing';

describe('gm-football-standings', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gm-football-standings></gm-football-standings>');

    const element = await page.find('gm-football-standings');
    expect(element).toHaveClass('hydrated');
  });
});

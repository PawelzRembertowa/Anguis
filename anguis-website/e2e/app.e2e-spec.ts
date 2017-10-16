import { AnguisWebsitePage } from './app.po';

describe('anguis-website App', () => {
  let page: AnguisWebsitePage;

  beforeEach(() => {
    page = new AnguisWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

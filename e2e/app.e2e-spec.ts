import { ArcadiaPage } from './app.po';

describe('arcadia App', () => {
  let page: ArcadiaPage;

  beforeEach(() => {
    page = new ArcadiaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

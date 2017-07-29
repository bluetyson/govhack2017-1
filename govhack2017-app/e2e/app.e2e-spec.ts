import { Govhack2017AppPage } from './app.po';

describe('govhack2017-app App', () => {
  let page: Govhack2017AppPage;

  beforeEach(() => {
    page = new Govhack2017AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { AutotronicaPage } from './app.po';

describe('autotronica App', () => {
  let page: AutotronicaPage;

  beforeEach(() => {
    page = new AutotronicaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

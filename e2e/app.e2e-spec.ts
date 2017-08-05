import { BackpocketAngularPage } from './app.po';

describe('backpocket-angular App', () => {
  let page: BackpocketAngularPage;

  beforeEach(() => {
    page = new BackpocketAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

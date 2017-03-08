import { HandselectorPage } from './app.po';

describe('handselector App', () => {
  let page: HandselectorPage;

  beforeEach(() => {
    page = new HandselectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

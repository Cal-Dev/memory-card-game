import { MemoryCardGamePage } from './app.po';

describe('memory-card-game App', function() {
  let page: MemoryCardGamePage;

  beforeEach(() => {
    page = new MemoryCardGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

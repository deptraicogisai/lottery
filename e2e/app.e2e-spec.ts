import { LotteryPage } from './app.po';

describe('lottery App', function() {
  let page: LotteryPage;

  beforeEach(() => {
    page = new LotteryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

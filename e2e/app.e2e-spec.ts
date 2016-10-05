import { SkolarsijuanPage } from './app.po';

describe('skolarsijuan App', function() {
  let page: SkolarsijuanPage;

  beforeEach(() => {
    page = new SkolarsijuanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

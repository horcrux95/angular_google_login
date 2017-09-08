import { LinkedinPage } from './app.po';

describe('linkedin App', function() {
  let page: LinkedinPage;

  beforeEach(() => {
    page = new LinkedinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AngularRoutingSamplePage } from './app.po';

describe('angular-routing-sample App', () => {
  let page: AngularRoutingSamplePage;

  beforeEach(() => {
    page = new AngularRoutingSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

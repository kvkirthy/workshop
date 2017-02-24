import { Angular2RoutingSamplePage } from './app.po';

describe('angular2-routing-sample App', () => {
  let page: Angular2RoutingSamplePage;

  beforeEach(() => {
    page = new Angular2RoutingSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

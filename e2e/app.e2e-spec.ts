import { InheritancePage } from './app.po';

describe('inheritance App', () => {
  let page: InheritancePage;

  beforeEach(() => {
    page = new InheritancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

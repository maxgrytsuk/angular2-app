import { GigyaTestPage } from './app.po';

describe('gigya-test App', () => {
  let page: GigyaTestPage;

  beforeEach(() => {
    page = new GigyaTestPage();
  });

  it('should display message saying Gigya test', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Gigya test');
  });
});

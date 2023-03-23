import { test, expect } from '@playwright/test';
import { GoogleMainPage } from '../src/page-objects/pages/google-main-page';
import { GoogleResultPage } from '../src/page-objects/pages/google-result-page';

test.describe('Google Search', () => {

  let googleMainPage: GoogleMainPage;

  test.beforeEach(async ({ page, browser }) => {
    googleMainPage = new GoogleMainPage(page);
    const browserContext = await browser.newContext();
    browserContext.addCookies([{ name: 'SOCS', value: 'CAESHAgBEhJnd3NfMjAyMzAyMjctMF9SQzEaAmh1IAEaBgiAq_qfBg', url: 'https://google.com' }]);
    await googleMainPage.goTo();
  });

  test('Google workflow', async ({ page }) => {
    await googleMainPage.searchWidget.setSearchInput('Tesla');
    await googleMainPage.searchWidget.searchInput.press('Enter');
    const googleResultPage = new GoogleResultPage(page);
    await googleResultPage.navigationBar.goToImages();
  });
});
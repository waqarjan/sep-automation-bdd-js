import { BrowserUtility } from '../utilities/BrowserUtility.js';

export class BasePage {
  
  /**
   * Tells your editor that `page` is a Playwright `Page` object
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async login() {
    // await this.page.context().setHTTPCredentials({
    //   username: process.env.SEP_USERNAME,
    //   password: process.env.SEP_PASSWORD,
    // });
    // await this.page.goto(process.env.SEP_QA_URL);
    // BrowserUtility.verify_title(this.page, 'Checkout | Cydeo');
    // await this.page.waitForLoadState('networkidle');

    const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");
    await this.page.setExtraHTTPHeaders({Authorization: `Basic ${code}`,});
    await this.page.goto(process.env.SEP_QA_URL);
    BrowserUtility.verify_title(this.page, 'Checkout | Cydeo');
    await this.page.waitForLoadState("networkidle"); 
  }
}
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
    // NOTE: The Basic auth header approach was unreliable here because some protected requests/redirects
    // were not inheriting the Authorization header consistently, causing the checkout/payment flow to hang.
    // Setting HTTP credentials on the browser context applies the authentication before navigation,
    // which is why this method succeeds and keeps the protected app pages accessible.
    
    /**
     * const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");
     * await this.page.setExtraHTTPHeaders({Authorization: `Basic ${code}`,});
     * await this.page.goto(process.env.SEP_QA_URL);
     * BrowserUtility.verify_title(this.page, 'Checkout | Cydeo');
     * await this.page.waitForLoadState("networkidle"); 
     */

        await this.page.context().setHTTPCredentials({username: process.env.SEP_USERNAME, password: process.env.SEP_PASSWORD });
        await this.page.goto(process.env.SEP_QA_URL);
        BrowserUtility.verify_title(this.page, 'Checkout | Cydeo');
        await this.page.waitForLoadState('networkidle');
  }
}
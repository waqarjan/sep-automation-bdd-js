import { BasePage } from "./BasePage.js";

export class LeftMainPage extends BasePage {
  
  /**
   * Tells your editor that `page` is a Playwright `Page` object
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.cydeoImageAtLeftWindow = page.locator("//img[@src='assets/images/logo.svg' and contains(@style,'margin-top: -4px')]" );
    this.programName = page.locator("//a[@href='https://www.cydeo.com' and normalize-space()='Test Automation with Selenium']");
    this.footerElements = page.locator("//a[contains(@href, 'https://cydeo.com/')]");
    this.cydeoSecureCheckoutText = page.locator("//p[contains(@class,'checkout-title') and contains(normalize-space(.),'Secure checkout')]");
    this.termsAndConditionsLink = page.locator("//a[@href='https://cydeo.com/terms-conditions/' and normalize-space()='Terms and conditions']");
    this.privacyPolicyLink = page.locator("//a[@href='https://cydeo.com/privacy-policy/' and normalize-space()='Privacy Policy']");
    this.disclaimerLink = page.locator("//a[@href='https://cydeo.com/disclaimer/' and normalize-space()='Disclaimer']");
    this.cookiePolicyLink = page.locator("//a[@href='https://cydeo.com/cookie-policy/' and normalize-space()='Cookie Policy']");

  }
}

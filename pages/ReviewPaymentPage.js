import { BasePage } from "./BasePage.js";
import { expect } from "@playwright/test";

export class ReviewPaymentPage extends BasePage {
  /**
   * Tells your editor that `page` is a Playwright `Page` object
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);
    this.reviewPageStepCircle = page.locator("(//div[@class='step-circle'])[3]");
    this.paymentForm = page.locator("//form[@id='payment-form']");
    this.paymentFrame = page.frameLocator("(//iframe[contains(@src,'js.stripe.com') and @title='Secure payment input frame'])");
    this.cardNumberInput = this.paymentFrame.locator("//input[@id='payment-numberInput']");
    this.expiryDateInput = this.paymentFrame.locator("//input[@id='payment-expiryInput']");
    this.cvcInput = this.paymentFrame.locator("//input[@id='payment-cvcInput']");
    this.countryDropDown = this.paymentFrame.locator("//select[@id='payment-countryInput']");
    this.zipCodeInput = this.paymentFrame.locator("//input[@id='payment-postalCodeInput']");
    this.byProvidingCardInformationText = page.locator("//p[contains(., 'By providing your card information')]");
    this.productPriceText = page.locator("//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Product Price')]");
    this.productPriceAmount = page.locator("//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Product Price')]/following-sibling::span");
    this.installmentPriceText = page.locator("//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Installment Price')]");
    this.installmentPriceAmount = page.locator("//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Installment Price')]/following-sibling::span");
    this.subtotalText = page.locator("//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Subtotal')]");
    this.subtotalAmount = page.locator("//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Subtotal')]/following-sibling::span");
    this.processingFeeText = page.locator("//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Processing')]");
    this.processingFeeAmount = page.locator("//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Processing')]/following-sibling::span");
    this.totalText = page.locator("//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Total')]");
    this.totalAmount = page.locator("//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Total')]/following-sibling::span");
    this.termsAndConditionsCheckbox = page.locator("//input[@id='defaultCheck2']");
    this.termsAndConditionsLink = page.locator("//u[normalize-space()='Terms and Conditions']");
    this.payButton = page.locator("//button[@type='button']");
    this.cardNumberErrorMessage = this.paymentFrame.locator("//p[@id='Field-numberError' and @class='p-FieldError Error' and @role='alert']");
    this.backButton = page.locator("(//span[@class='back-button'])[2]");
    this.footerText = page.locator("(//p[@class = 'footer-text' and contains(text(), 'Need help?')])[3]");
    this.cardExpiryErrorMessage = this.paymentFrame.locator("//p[@id='Field-expiryError' and @class='p-FieldError Error' and @role='alert']");
    this.cardCVCErrorMessage = this.paymentFrame.locator("//p[@id='Field-cvcError' and @class='p-FieldError Error' and @role='alert']");
    this.zipCodeErrorMessage = this.paymentFrame.locator("//p[@id='Field-postalCodeError' and @class='p-FieldError Error' and @role='alert']");
    this.progressBar = page.locator("//mat-spinner[@role='progressbar']");
    this.readAgreeTerms = page.locator('//div[3]/div[4]/div[1]/div[2]/div/div[6]');
    this.termsAgreementTextPop = page.locator("//h1[@id='mat-mdc-dialog-title-0']");

    this.confirmationTitle = page.locator("//p[@class='confirmation-title']");
    this.programeName = page.locator("//span[@class='purplish' and normalize-space()='Test Automation with Selenium']");
    this.emailAddress = page.locator("//p/u");
    this.contactInformation = page.locator("//span[@class='support-email' and normalize-space()='support@cydeo.com']");
  }

  /**
   * @param {string} [cardNumber]
   */
  async enterCardNumber(cardNumber = process.env.CARD_NUMBER) {
    await this.cardNumberInput.fill(cardNumber);
  }

  async tabOutOfCardNumber() {
    await this.cardNumberInput.press("Tab");
  }

  async verifyCardNumberErrorMessage() {
    const cardNumber = (await this.cardNumberInput.inputValue()).replace(/\D/g, "");
    const expectedErrorMessage = cardNumber.length < 16
      ? "Your card number is incomplete."
      : "Your card number is invalid.";

    await expect(this.cardNumberErrorMessage).toBeVisible();
    await expect(this.cardNumberErrorMessage).toHaveText(expectedErrorMessage);
  }

  /**
   * @param {string} [expiryDate]
   */
  async enterExpiryDate(expiryDate = process.env.CARD_EXPIRATION_DATE) {
    await this.expiryDateInput.fill(expiryDate);
  }

  async tabOutOfExpiryDate() {
    await this.expiryDateInput.press("Tab");
  }

  /**
   * @param {string} [cvc]
   */
  async enterCVC(cvc = process.env.CARD_SECURITY_CODE) {
    await this.cvcInput.fill(cvc);
  }

  async tabOutOfCVC() {
    await this.cvcInput.press("Tab");
  }

  async verifyCVCErrorMessage() {
    const cvc = (await this.cvcInput.inputValue()).replace(/\D/g, "");

    if (cvc.length < 3) {
      await expect(this.cardCVCErrorMessage).toBeVisible();
      await expect(this.cardCVCErrorMessage).toHaveText("Your security code is incomplete.");
    }
  }


  
  /**
   * @param {string} [zipCode]
   */
  async enterZipCode(zipCode = process.env.ZIP_CODE) {
    await this.zipCodeInput.fill(zipCode);
  }

  async clickTermsAndConditionsCheckbox() {
    await this.termsAndConditionsCheckbox.click();
  }

  async clickBackButton() {
    await this.backButton.click();
  }

  async clickPayButton() {
    await this.payButton.click();
  }

  async enterPaymentForm() {
    await this.enterCardNumber();
    await this.enterExpiryDate();
    await this.enterCVC();
    await this.enterZipCode();
  }


  async completePaymentForm() {
    await this.enterCardNumber();
    await this.enterExpiryDate();
    await this.enterCVC();
    await this.enterZipCode();
    await this.clickTermsAndConditionsCheckbox();
    await this.clickPayButton();
  }

  
  
}

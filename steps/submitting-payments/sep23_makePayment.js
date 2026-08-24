import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then('the user enters valid Card Number', async function () {
    await reviewPaymentPage.enterCardNumber();
});
Then('the user enters valid card Expiry Date', async function () {
    await reviewPaymentPage.enterExpiryDate();
});
Then('the user enters valid card Security Code', async function () {
    await reviewPaymentPage.enterCVC();
});
Then('the user enters valid ZIP code', async function () {
    await reviewPaymentPage.enterZipCode();
});



When('the user enter valid card information', async function () {
    await reviewPaymentPage.enterPaymentForm();
});
When('the user check Terms and conditions checkbox', async function () {
    await reviewPaymentPage.clickTermsAndConditionsCheckbox();
});
When('the user clicks on Pay button', async function () {
    await reviewPaymentPage.clickPayButton();
});
Then('user should see Payments confirmation page', async function () {
    await expect(reviewPaymentPage.confirmationTitle).toBeVisible({ timeout: 30000 });
});
Then('user should see program Test Automation with Selenium', async function () {
    await expect(reviewPaymentPage.programeName).toBeVisible();
});
Then('user should see correct email address is displayed', async function () {
    await expect(reviewPaymentPage.emailAddress).toBeVisible();
});
Then('user should see CYDEO contact information', async function () {
    await expect(reviewPaymentPage.contactInformation).toBeVisible();
});
Then('user should see Review step color is green', async function () {
    await expect(reviewPaymentPage.reviewPageStepCircle).toHaveCSS('background-color', 'rgb(172, 245, 138)'); // blue
});
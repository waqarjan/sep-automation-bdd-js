import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When('user enter invalid {string} date that is in the past', async function (expiryDate) {
	await reviewPaymentPage.enterExpiryDate(expiryDate);
    await reviewPaymentPage.tabOutOfExpiryDate();
});

Then('the user should inline {string} for Expiration date field', async function (expirtionDateInlineErrorMessage) {
    await expect(reviewPaymentPage.cardExpiryErrorMessage).toBeVisible();
    await expect(reviewPaymentPage.cardExpiryErrorMessage).toHaveText(expirtionDateInlineErrorMessage);
});
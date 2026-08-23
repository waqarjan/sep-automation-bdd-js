import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


When('user enters invalid Card number {string}', async function (cardNumber) {
	await reviewPaymentPage.enterCardNumber(cardNumber);
    await reviewPaymentPage.tabOutOfCardNumber();
});

Then('the user should see inline error message for Card number field', async function () {
    await reviewPaymentPage.verifyCardNumberErrorMessage();

});
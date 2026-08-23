import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


When('user enters invalid {string} CVC number', async function (cvcNumber) {
	await reviewPaymentPage.enterCVC(cvcNumber);
    await reviewPaymentPage.tabOutOfCVC();
});

Then('the user should see an inline error message for CVC field', async function () {
    await reviewPaymentPage.verifyCVCErrorMessage();
});
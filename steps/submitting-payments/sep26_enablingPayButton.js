import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then('user see Terms and Conditions checkbox is unchecked', async function () {
    await expect(reviewPaymentPage.termsAndConditionsCheckbox).not.toBeChecked();
});

Then('user see the Pay button is disabled', async function () {
    await expect(reviewPaymentPage.payButton).toBeDisabled();
});
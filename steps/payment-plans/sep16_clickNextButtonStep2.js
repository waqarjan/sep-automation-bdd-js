import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage,    reviewPaymentPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { ReviewPaymentPage } from "../../pages/ReviewPaymentPage.js";

Then('user should see price summary is displayed', async function () {
	await expect(paymentPlanPage.upfrontPaymentAmount).toBeVisible();
	await expect(paymentPlanPage.installmentsPaymentAmount).toBeVisible();
});
Then('user should see Back button is displayed', async function () {
    expect(await paymentPlanPage.backButton.isVisible()).toBeTruthy();  
});
When('the user completes Payment plan and clicks Next', async function () {
    await paymentPlanPage.selectPaymentPlan("upfront");
    await paymentPlanPage.clickNextButton();
});
Then('user should see Payment plan stepper color is green', async function () {
    await expect(paymentPlanPage.paymentPlanStepCircle).toHaveCSS('background-color', 'rgb(172, 245, 138)');
});
Then('user should see Review step color is blue', async function () {
    await expect(reviewPaymentPage.reviewPageStepCircle).toHaveCSS('background-color', 'rgb(1, 201, 255)');
});
import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, paymentPlanPage } from "../../globalPagesSetup.js";
import { reviewPaymentPage } from "../../globalPagesSetup.js";


Then('user should Start Application step color is blue', async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS('background-color', 'rgb(1, 201, 255)');
});

Then('user should see Payment plan step color is grey', async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS('border-color', 'rgb(217, 226, 236)');
});

Then('user should see Review step color is grey', async function () {
    await expect(startApplicationPage.reviewStepCircle).toHaveCSS('border-color', 'rgb(217, 226, 236)');
});

When('user completes Start Application and clicks Next', async function () {
await startApplicationPage.completeStartApplicationStep();
});

Then('user should see Start Appliation step color turns green and Payment plan step turns blue', async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS('background-color', 'rgb(172, 245, 138)'); // green
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS('background-color', 'rgb(1, 201, 255)'); // blue
});

When('user completes Payment plan and clicks Next', async function () {
    await paymentPlanPage.completePaymentPlanStep();
});

Then('user should see Payment plan step color turns green and Review step turns blue', async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS('background-color', 'rgb(172, 245, 138)'); // green
    await expect(paymentPlanPage.paymentPlanStepCircle).toHaveCSS('background-color', 'rgb(172, 245, 138)'); // green
    await expect(reviewPaymentPage.reviewPageStepCircle).toHaveCSS('background-color', 'rgb(1, 201, 255)'); // blue
});


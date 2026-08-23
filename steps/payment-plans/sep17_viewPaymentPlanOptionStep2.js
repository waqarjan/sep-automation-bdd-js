import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given('user completes payment plan page', async function () {
    await paymentPlanPage.completePaymentPlanStep();
});

Then('user see Upfront text with Upfront price', async function () {
  await expect(paymentPlanPage.upfrontPaymentOption).toBeVisible();
  await expect(paymentPlanPage.upfrontPaymentAmount).toBeVisible();
});

Then('user see pay once text', async function () {
    await expect(paymentPlanPage.payOnceTextUpFront).toBeVisible();
});

Then('user see total number of Installements', async function () {
    await expect(paymentPlanPage.installmentsPaymentOption).toBeVisible();
});

Then('user see installment amount per month', async function () {
    await expect(paymentPlanPage.installmentsPaymentAmount).toBeVisible();
});


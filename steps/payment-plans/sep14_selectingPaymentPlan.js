import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page, startApplicationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";




Given('the user is on the Payment Plan page', async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS('background-color', 'rgb(1, 201, 255)'); // blue
});


Then('user see no Payment Plan is be selected', async function () {
    const upfrontBorderColor = await paymentPlanPage.upfrontPaymentFrame.evaluate(
        (element) => getComputedStyle(element).borderColor);
    const installmentsBorderColor = await paymentPlanPage.installmentsPaymentFrame.evaluate(
        (element) => getComputedStyle(element).borderColor);

  expect(upfrontBorderColor).not.toBe('rgb(40, 201, 251)');
  expect(installmentsBorderColor).not.toBe('rgb(40, 201, 251)');
});

Then('user see Next button is disabled by default', async function () {
        await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
});



When('the user selects Upfront payment plan accordion', async function () {
    await paymentPlanPage.selectPaymentPlanByName('Upfront');
});

Then('user see the Upfront payment plan option is highlighted', async function () {
 await expect(paymentPlanPage.upfrontPaymentFrame).toHaveCSS("border-color", "rgb(40, 201, 251)");
});

Then('user see the Next button is enabled', async function () {
    expect(await paymentPlanPage.activeNextButton.isEnabled()).toBeTruthy();
});

Then('user should be able to change payment plan from Upfront to Installments', async function () {
    await paymentPlanPage.selectPaymentPlanByName('Installments');
    await expect(paymentPlanPage.installmentsPaymentFrame).toHaveCSS("border-color", "rgb(40, 201, 251)");
});
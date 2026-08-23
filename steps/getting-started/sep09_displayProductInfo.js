import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page, leftMainPage } from "../../globalPagesSetup.js";


Then('user see Product name Test Automation with Selenium is displayed', async function () {
    expect(await startApplicationPage.programNameOnInfoCard.isVisible()).toBeTruthy();
});

Then('user see Product name matches Program name', async function () {
    const productName = await startApplicationPage.programNameOnInfoCard.textContent();
    const programName = await leftMainPage.programName.textContent();

    expect(productName.trim()).toEqual(programName.trim());
});

Then('user see Product price is displayed', async function () {
    expect(await startApplicationPage.programPrice.isVisible()).toBeTruthy();
});

Then('user see flexible payment option is displayed', async function () {
    expect(await startApplicationPage.flexiblePaymentsPlanAvailableText.isVisible()).toBeTruthy();
});

Then('user see flexible Program start date is displayed', async function () {
    expect(await startApplicationPage.programStartDate.isVisible()).toBeTruthy();
});

Then('user see final date for refund is displayed', async function () {
    expect(await startApplicationPage.refundEndDate.isVisible()).toBeTruthy();
});
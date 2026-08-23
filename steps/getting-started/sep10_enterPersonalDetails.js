import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


When('user see first name field is displayed', async function () {
    expect(await startApplicationPage.firstNameInputBox.isVisible()).toBeTruthy();
});

When('user see the last name field is displayed', async function () {
    expect(await startApplicationPage.lastNameInputBox.isVisible()).toBeTruthy();
});

When('user see the email address field is displayed', async function () {
    expect(await startApplicationPage.emailInputBox.isVisible()).toBeTruthy();
});

When('user see the phone number field is displayed', async function () {
    expect(await startApplicationPage.phoneNumberInputBox.isVisible()).toBeTruthy();
});

When('the User should see Payment plan is displayed', async function () {
    expect(await startApplicationPage.flexiblePaymentsPlanAvailableText.isVisible()).toBeTruthy();
});
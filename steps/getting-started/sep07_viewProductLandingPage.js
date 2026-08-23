import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { leftMainPage } from "../../globalPagesSetup.js";

Then('user see Cydeo Secure checkout is displayed', async function () {
    expect(await leftMainPage.cydeoSecureCheckoutText.isVisible()).toBeTruthy();
});

Then('user see Program name is displayed', async function () {
    expect(await leftMainPage.programName.isVisible()).toBeTruthy();
});

Then('user see footer link Terms and conditions is displayed', async function () {
    expect(await leftMainPage.termsAndConditionsLink.isVisible()).toBeTruthy();
});

Then('user see footer links Privacy Policy is displayed', async function () {
    expect(await leftMainPage.privacyPolicyLink.isVisible()).toBeTruthy();
});

Then('user see footer links Disclaimer is displayed', async function () {
    expect(await leftMainPage.disclaimerLink.isVisible()).toBeTruthy();
});

Then('user see footer links Cookie Policy is displayed', async function () {
    expect(await leftMainPage.cookiePolicyLink.isVisible()).toBeTruthy();
});
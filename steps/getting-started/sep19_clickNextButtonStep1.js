import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


When('user enters the first name', async function () {
    await startApplicationPage.enterFirstName('Waqar');
});

When('user enters the last name', async function () {
    await startApplicationPage.enterLastName('Jan');
});

When('user enters the email address', async function () {
    await startApplicationPage.enterEmail('waqar.jan@example.com');
});

When('user enters the phone number', async function () {
    await startApplicationPage.enterPhoneNumber('123-456-7890');
});

When('user selects {string} about us dropdown', async function (howDidYouHear) {
    await startApplicationPage.selectHowDidYouHearAboutUs(howDidYouHear);
});

When('user clicks the Next button on start application step', async function () {
    await startApplicationPage.clickNextButton();
});

When('user clicks the next button on start application step', async function () {
    await startApplicationPage.clickNextButton();
});

Then('user should see Start Appliation stepper color is green', async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS('background-color', 'rgb(172, 245, 138)'); // green
});

Then('user should see Payment plan step color is blue', async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS('background-color', 'rgb(1, 201, 255)'); // blue
});
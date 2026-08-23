import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup.js";


Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});

Given('user completes start application step', async function () {
  // await startApplicationPage.completeStartApplicationStep();

await startApplicationPage.enterFirstName(faker.person.firstName());
await startApplicationPage.enterLastName(faker.person.lastName());
await startApplicationPage.enterEmail(faker.internet.email());
await startApplicationPage.enterPhoneNumber(faker.string.numeric(10));
await startApplicationPage.clickNextButton();;
});

Given('user completes payment plan page', async function () {
  // await paymentPlanPage.completePaymentPlanStep();

  await paymentPlanPage.selectPaymentPlanByName('Upfront');
  await paymentPlanPage.clickNextButton();
});
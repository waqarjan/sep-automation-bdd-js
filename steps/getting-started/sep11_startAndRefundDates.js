import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then('the program start date is displayed', async function () {
    expect(await startApplicationPage.programStartDate.isVisible()).toBeTruthy();
});


Then('the program refund date is displayed', async function () {
    expect(await startApplicationPage.refundEndDate.isVisible()).toBeTruthy();
});


Then('the displayed start date for the program is correct', async function () {
    const ACTUAL_START_DATE = await startApplicationPage.programStartDate.innerText();
    const EXPECTED_START_DATE = productInfo.startDate;
    // console.log(`Actual Start Date: ${ACTUAL_START_DATE}`);
    // console.log(`Expected Start Date: ${EXPECTED_START_DATE}`);
    expect(ACTUAL_START_DATE).toEqual(EXPECTED_START_DATE);
});


Then('the displayed refund date for the program is correct', async function () {
    const ACTUAL_REFUND_DATE = await startApplicationPage.refundEndDate.innerText();
    const EXPECTED_REFUND_DATE = productInfo.refundDate;
    // console.log(`Actual Refund Date: ${ACTUAL_REFUND_DATE}`);
    // console.log(`Expected Refund Date: ${EXPECTED_REFUND_DATE}`);
    expect(ACTUAL_REFUND_DATE).toEqual(EXPECTED_REFUND_DATE);
});
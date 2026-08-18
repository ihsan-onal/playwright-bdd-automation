import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});

Then("the program start date is displayed", async function () {
  await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then("the program refund date is displayed", async function () {
  await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then("the displayed start date for the program is correct", async function () {
  expect(await startApplicationPage.programStartDate.innerText()).toBe(productInfo.startDate);
});

Then("the displayed refund date for the program is correct", async function () {
  expect(await startApplicationPage.refundEndDate.innerText()).toBe(productInfo.refundDate);
});

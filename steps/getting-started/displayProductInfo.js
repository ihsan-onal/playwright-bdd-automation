import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { LeftMainPage } from "../../pages/LeftMainPage.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the product name should be displayed on the information card", async function () {
  expect(await startApplicationPage.programNameOnInfoCard.innerText()).toBe(productInfo.productName);
});

Then("the product name on the information card should match the product name on the left side of the screen", async function () {
  const productCardName = await startApplicationPage.programNameOnInfoCard.innerText();
  const leftMainPage = new LeftMainPage(page);
  expect(productCardName).toBe(await leftMainPage.programName.innerText());
});

Then("the product price should be displayed", async function () {
  await expect(startApplicationPage.programBasePrice).toBeVisible();
  expect(await startApplicationPage.programBasePrice.innerText()).toBe(`$${productInfo.prices[0].baseAmount}`);
});

Then("the flexible payment plan should be displayed", async function () {
  await expect(startApplicationPage.flexiblePaymentsPlanAvailableText).toBeVisible();
});

Then("the program start date should be displayed", async function () {
  await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then("the return policy and the final date for returns should be displayed", async function () {
  await expect(startApplicationPage.refundEndDate).toBeVisible();
});

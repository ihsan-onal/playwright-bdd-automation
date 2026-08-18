import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage } from "../../globalPagesSetup.js";

Then("the steps of the checkout process should be displayed", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toBeVisible();
  await expect(startApplicationPage.paymentPlanStepCircle).toBeVisible();
  await expect(startApplicationPage.reviewStepCircle).toBeVisible();
});

Then("the Start Application step should be highlighted in blue", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color", "rgb(1, 201, 255)");
});

Then("the Payment Plan and Review steps should be displayed in grey", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).not.toHaveCSS("background-color", "rgb(1, 201, 255)");
  await expect(startApplicationPage.reviewStepCircle).not.toHaveCSS("background-color", "rgb(1, 201, 255)");
});

import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage, startApplicationPage, reviewPaymentPage } from "../../globalPagesSetup.js";

Then("the step2 page should be displayed", async function () {
  await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});

When("customer clicks on any plan", async function () {
  await paymentPlanPage.upfrontPaymentOption.click();
  await expect(paymentPlanPage.upfrontPaymentAmount).toBeVisible();
  await expect(paymentPlanPage.payOnceTextUpFront).toBeVisible();
  await expect(paymentPlanPage.greenBadgeUpfrontDiscount).toBeVisible();
});

Then("the next button should be activated", async function () {
  await expect(paymentPlanPage.activeNextButton).toBeVisible();
});

When("customer clicks on the next button", async function () {
  await paymentPlanPage.upfrontPaymentOption.click();
  await expect(paymentPlanPage.activeNextButton).toBeVisible();
  await paymentPlanPage.activeNextButton.click();
});

Then("the step3 page should be displayed", async function () {
  await expect(startApplicationPage.reviewText).toBeVisible();
});

Then("the stepper should be green for step1 and step2, and blue for step3.", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color", "rgb(172, 245, 138)");
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS("background-color", "rgb(172, 245, 138)");
  await expect(startApplicationPage.reviewStepCircle).toHaveCSS("background-color", "rgb(1, 201, 255)");
});

Then("the payment component should be displayed", async function () {
  await expect(reviewPaymentPage.paymentForm).toBeVisible();
});

Then("the price summary should be displayed", async function () {
  await expect(reviewPaymentPage.totalText).toBeVisible();
});

Then("the back button should be displayed", async function () {
  await expect(reviewPaymentPage.backButtonStep3).toBeVisible();
});

Then("the pay button should be disabled", async function () {
  await expect(reviewPaymentPage.payButton).toBeDisabled();
});

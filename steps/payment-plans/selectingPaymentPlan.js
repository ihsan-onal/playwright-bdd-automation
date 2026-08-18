import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage } from "../../globalPagesSetup.js";

let lastSelectedPlan = "upfront";

When("user selects any pricing option", async function () {
  await paymentPlanPage.upfrontPaymentOption.click();
  lastSelectedPlan = "upfront";
  await expect(paymentPlanPage.upfrontPaymentAmount).toBeVisible();
  await expect(paymentPlanPage.payOnceTextUpFront).toBeVisible();
  await expect(paymentPlanPage.greenBadgeUpfrontDiscount).toBeVisible();
});

When("user changes their plan selection", async function () {
  await paymentPlanPage.installmentsPaymentOption.click();
  lastSelectedPlan = "installments";
  await expect(paymentPlanPage.installmentsPaymentAmount).toBeVisible();
  await expect(paymentPlanPage.perMonthTextInstallments).toBeVisible();
});

Then("the selected payment plan should be highlighted", async function () {
  if (lastSelectedPlan === "upfront") {
    await expect(paymentPlanPage.upfrontPaymentFrame).toHaveAttribute("aria-expanded", "true");
    await expect(paymentPlanPage.upfrontPaymentAmount).toBeVisible();
  } else {
    await expect(paymentPlanPage.installmentsPaymentFrame).toHaveAttribute("aria-expanded", "true");
    await expect(paymentPlanPage.installmentsPaymentAmount).toBeVisible();
  }
});

When("user selects any payment plan", async function () {
  await paymentPlanPage.upfrontPaymentOption.click();
  lastSelectedPlan = "upfront";
  await expect(paymentPlanPage.upfrontPaymentAmount).toBeVisible();
});

Then("the Next button should be active", async function () {
  await expect(paymentPlanPage.activeNextButton).toBeVisible();
  await expect(paymentPlanPage.activeNextButton).toBeEnabled();
});

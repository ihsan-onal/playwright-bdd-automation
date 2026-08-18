import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When("payment plan options are displayed", async function () {
  await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
  await expect(paymentPlanPage.upfrontPaymentOption).toBeVisible();
  await expect(paymentPlanPage.installmentsPaymentOption).toBeVisible();
});

Then("there should be a total of 2 payment plans", async function () {
  expect((await paymentPlanPage.paymentPlanBoxes.all()).length).toBe(2);
});

Then("each installment plan should be unique", async function () {
  const installmentPlans = await paymentPlanPage.installmentsPaymentOption.all();
  const prices = new Set();
  for (const plan of installmentPlans) {
    const price = await plan.textContent();
    expect(prices.has(price)).toBe(false);
    prices.add(price);
  }
});

Then("for each installment plan", async function () {
  const numberOfInstallments = productInfo.prices[1].numberOfInstallments;
  await paymentPlanPage.installmentsPaymentFrame.click();
  expect(await paymentPlanPage.installmentsNumberUnderInstallments.textContent()).toContain(numberOfInstallments.toString());
  expect(await paymentPlanPage.perMonthTextInstallments.textContent()).toContain("per month");
});

Then("there should be only one upfront price option", async function () {
  expect((await paymentPlanPage.upfrontPaymentOption.all()).length).toBe(1);
});

Then("the payment plan option should display", async function () {
  expect(await paymentPlanPage.upfrontPaymentOption.textContent()).toContain("Upfront");
  expect(await paymentPlanPage.payOnceTextUpFront.textContent()).toContain("pay once");
});

import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage } from "../../globalPagesSetup.js";

When("customer enters an incomplete expiration date", async function () {
  await expect(reviewPaymentPage.paymentForm).toBeVisible();
  await reviewPaymentPage.expiryDateInput.fill("12/2");
  await reviewPaymentPage.expiryDateInput.press("Tab");
});

When("customer enters an expiration date in the past", async function () {
  await expect(reviewPaymentPage.paymentForm).toBeVisible();
  await reviewPaymentPage.expiryDateInput.fill("12/20");
  await reviewPaymentPage.expiryDateInput.press("Tab");
});

Then("the expiration date error message should be {string}", async function (expectedMessage) {
  await expect(reviewPaymentPage.cardExpiryErrorMessage).toContainText(expectedMessage);
});

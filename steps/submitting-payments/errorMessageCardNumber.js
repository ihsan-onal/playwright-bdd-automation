import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage } from "../../globalPagesSetup.js";

When("customer enters an incomplete card number", async function () {
  await expect(reviewPaymentPage.paymentForm).toBeVisible();
  await reviewPaymentPage.cardNumberInput.fill("5555 4444 3333");
  await reviewPaymentPage.cardNumberInput.press("Tab");
  await expect(reviewPaymentPage.cardNumberErrorMessage).toContainText("Your card number is incomplete.");
});

Then("the error message should be displayed", async function () {
  await expect(reviewPaymentPage.cardNumberErrorMessage).toBeVisible();
});

When("customer enters an invalid card number", async function () {
  await expect(reviewPaymentPage.paymentForm).toBeVisible();
  await reviewPaymentPage.cardNumberInput.fill("2222 3333 2222 1111");
  await reviewPaymentPage.cardNumberInput.press("Tab");
  await expect(reviewPaymentPage.cardNumberErrorMessage).toContainText("Your card number is invalid.");
});

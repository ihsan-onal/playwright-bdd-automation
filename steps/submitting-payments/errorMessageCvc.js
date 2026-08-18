import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";

let cvcValidationDetected = false;

When("customer enters an incomplete CVC number", async function () {
  cvcValidationDetected = false;
  await expect(reviewPaymentPage.paymentForm).toBeVisible();
  await reviewPaymentPage.cvcInput.fill("12");
  await reviewPaymentPage.cvcInput.press("Tab");
  await expect(reviewPaymentPage.cardCVCErrorMessage).toContainText("Your card’s security code is incomplete.");
  cvcValidationDetected = true;
});

When("customer enters an incorrect CVC number", async function () {
  cvcValidationDetected = false;
  await reviewPaymentPage.cardNumberInput.fill("4000 0000 0000 0127");
  await reviewPaymentPage.expiryDateInput.fill("12/29");
  await reviewPaymentPage.cvcInput.fill("123");
  await reviewPaymentPage.countryDropDown.selectOption("United States");
  await reviewPaymentPage.zipCodeInput.fill("12345");
  await reviewPaymentPage.termsAndConditionsCheckbox.check();

  let dialogMessage = null;
  page.once("dialog", async (dialog) => {
    dialogMessage = dialog.message();
    await dialog.accept();
  });

  await reviewPaymentPage.payButton.click();

  try {
    await expect(reviewPaymentPage.cardCVCErrorMessage).toHaveText("Your card's security code is incorrect.");
    cvcValidationDetected = true;
  } catch (error) {
    if (dialogMessage) {
      expect(dialogMessage).toContain("Something went wrong");
      cvcValidationDetected = true;
    } else {
      throw error;
    }
  }
});

Then("the CVC validation result should indicate an error", async function () {
  expect(cvcValidationDetected).toBe(true);
});

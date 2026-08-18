import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, confirmationPage } from "../../globalPagesSetup.js";

When("customer fills all the fields with valid information", async function () {
  await reviewPaymentPage.cardNumberInput.fill(process.env.CARD_NUMBER);
  await reviewPaymentPage.expiryDateInput.fill(process.env.EXPIRATION_DATE);
  await reviewPaymentPage.cvcInput.fill(process.env.CVC);
  await reviewPaymentPage.zipCodeInput.fill(process.env.ZIP_CODE);
  await reviewPaymentPage.countryDropDown.selectOption(process.env.COUNTRY);
});

When("customer checks the terms and conditions checkbox", async function () {
  await reviewPaymentPage.termsAndConditionsCheckbox.check();
});

When("customer clicks on the Pay button", async function () {
  await reviewPaymentPage.payButton.click();
});

Then("the confirmation page should be displayed", async function () {
  await expect(confirmationPage.confirmationMessage).toBeVisible();
});

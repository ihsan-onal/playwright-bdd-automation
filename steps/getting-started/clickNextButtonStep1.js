import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, paymentPlanPage } from "../../globalPagesSetup.js";

When("user fills all the fields with valid information", async function () {
  await startApplicationPage.firstNameInputBox.fill("John");
  await startApplicationPage.lastNameInputBox.fill("Doe");
  await startApplicationPage.emailInputBox.fill("john.doe@example.com");
  await startApplicationPage.phoneNumberInputBox.fill("1234567890");
  await startApplicationPage.howDidYouHearAboutUsDropDown.click();
  await startApplicationPage.emailOptionFromDropDown.click();
});

When("user clicks the next button on step 1", async function () {
  await startApplicationPage.nextButton.click();
});

Then("user should be taken to step2", async function () {
  await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});

When("user fills only the required fields with valid information", async function () {
  await startApplicationPage.firstNameInputBox.fill("John");
  await startApplicationPage.lastNameInputBox.fill("Doe");
  await startApplicationPage.emailInputBox.fill("john.doe@example.com");
  await startApplicationPage.phoneNumberInputBox.fill("1234567890");
});

import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage } from "../../globalPagesSetup.js";

Then("the first name text field is present", async function () {
  await expect(startApplicationPage.firstNameInputBox).toBeVisible();
});

Then("the last name text field is present", async function () {
  await expect(startApplicationPage.lastNameInputBox).toBeVisible();
});

Then("the email address text field is present and validates for email format", async function () {
  await expect(startApplicationPage.emailInputBox).toBeVisible();
  await expect(startApplicationPage.emailInputBox).toHaveAttribute("type", "email");
});

Then("the phone text field is present and allows numbers only", async function () {
  await expect(startApplicationPage.phoneNumberInputBox).toBeVisible();
  await expect(startApplicationPage.phoneNumberInputBox).toHaveAttribute("formControlName", "phoneNumber");
});

Then("the About us dropdown list is present", async function () {
  await expect(startApplicationPage.howDidYouHearAboutUsDropDown).toBeVisible();
});

Then("the Next button should be disabled if any required data is missing or invalid", async function () {
  await startApplicationPage.firstNameInputBox.fill("");
  await startApplicationPage.lastNameInputBox.fill("");
  await startApplicationPage.emailInputBox.fill("");
  await startApplicationPage.phoneNumberInputBox.fill("");
  const color = await startApplicationPage.startApplicationStepCircle.evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(color).toBe("rgb(1, 201, 255)");
});

import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, leftMainPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the Secure checkout text should be displayed", async function () {
  await expect(leftMainPage.secureCheckout).toBeVisible();
  expect((await leftMainPage.secureCheckout.innerText()).trim()).toBe("Secure checkout");
});

Then("the program name should be displayed", async function () {
  await expect(leftMainPage.programName).toBeVisible();
  expect(await leftMainPage.programName.innerText()).toBe(productInfo.programName);
});

Then("the footer elements should be displayed in the correct order", async function () {
  const footerElements = await leftMainPage.footerElements.all();
  await expect(leftMainPage.cydeoImageAtLeftWindow).toBeVisible();
  const expectedLinks = ["Terms and conditions", "Privacy Policy", "Disclaimer", "Cookie Policy"];
  for (let i = 0; i < expectedLinks.length; i++) {
    expect(await footerElements[i].innerText()).toBe(expectedLinks[i]);
  }
});

Then("the help text should be displayed in the footer", async function () {
  await expect(startApplicationPage.footer).toBeVisible();
  expect(await startApplicationPage.footer.innerText()).toBe("Need help? Contact us at enrollment@cydeo.com");
});

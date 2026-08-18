import { expect } from "@playwright/test";

export class BrowserUtility {
  static async check(locator) {
    await locator.check();
    await expect(locator).toBeChecked();
  }

  static async uncheck(locator) {
    await locator.uncheck();
    await expect(locator).not.toBeChecked();
  }

  static async verifyTitle(page, expected) {
    await expect(page).toHaveTitle(expected);
  }

  static async enterInput(locator, input) {
    await expect(locator).toBeVisible();
    await locator.fill(input);
  }
}

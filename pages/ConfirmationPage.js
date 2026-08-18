import { BasePage } from "./BasePage.js";

export class ConfirmationPage extends BasePage {
  constructor(page) {
    super(page);
    this.confirmationMessage = page.locator("//p[@class='confirmation-title']");
  }
}

import { expect } from "@playwright/test";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async login() {
    const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");
    await this.page.setExtraHTTPHeaders({ Authorization: `Basic ${code}` });
    await this.page.goto(process.env.SEP_URL);
    await expect(this.page).toHaveTitle("Checkout | Cydeo");
  }
}

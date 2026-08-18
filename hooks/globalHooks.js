import { Before, After, setWorldConstructor, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, firefox, webkit } from "@playwright/test";
import { initElements } from "../globalPagesSetup.js";
import fs from "fs";
import path from "path";

const BROWSER_TYPE = "chrome";
const HEADLESS_MODE = true;
const MAXIMIZED_WINDOW = true;
const SLOW_MOTION_DELAY = 0;
const DEFAULT_TIMEOUT = 30000;

Before(async function () {
  await this.init();
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    await takeScreenshot(this.page, scenario.pickle.name);
  }
  await this.close();
});

async function takeScreenshot(page, scenarioName) {
  if (!page) return;
  const screenshotsDir = path.join(process.cwd(), "reports", "screenshots");
  fs.mkdirSync(screenshotsDir, { recursive: true });
  const currentDateTime = new Date().toISOString().replace(/[:T.]/g, "_").slice(0, -5);
  const fileName = `${scenarioName.replace(/\s+/g, "_")}_${currentDateTime}.png`;
  await page.screenshot({ path: path.join(screenshotsDir, fileName), fullPage: true });
}

class CustomWorld {
  async initializeBrowser() {
    const launchOptions = {
      headless: HEADLESS_MODE,
      slowMo: SLOW_MOTION_DELAY,
      args: MAXIMIZED_WINDOW && BROWSER_TYPE.toLowerCase() === "chrome" ? ["--start-maximized"] : [],
    };
    const browserType = BROWSER_TYPE.toLowerCase();
    return await (browserType === "firefox" ? firefox : browserType === "webkit" || browserType === "safari" ? webkit : chromium).launch(launchOptions);
  }

  async init() {
    this.browser = await this.initializeBrowser();
    this.context = await this.browser.newContext(MAXIMIZED_WINDOW ? { viewport: null } : {});
    this.page = await this.context.newPage();
    initElements(this.page);
  }

  async close() {
    await Promise.all([
      this.page?.close().catch(() => {}),
      this.browser?.close().catch(() => {}),
    ]);
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

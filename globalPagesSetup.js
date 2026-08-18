import { LeftMainPage } from "./pages/LeftMainPage.js";
import { PaymentPlanPage } from "./pages/PaymentPlanPage.js";
import { StartApplicationPage } from "./pages/StartApplicationPage.js";
import { ReviewPaymentPage } from "./pages/ReviewPaymentPage.js";
import { ConfirmationPage } from "./pages/ConfirmationPage.js";

export let leftMainPage;
export let paymentPlanPage;
export let startApplicationPage;
export let reviewPaymentPage;
export let page;
export let confirmationPage;

export const initElements = (argPage) => {
  page = argPage;
  leftMainPage = new LeftMainPage(page);
  paymentPlanPage = new PaymentPlanPage(page);
  startApplicationPage = new StartApplicationPage(page);
  reviewPaymentPage = new ReviewPaymentPage(page);
  confirmationPage = new ConfirmationPage(page);
};

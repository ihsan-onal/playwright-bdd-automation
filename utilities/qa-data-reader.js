import { readFileSync } from "fs";

class Price {
  constructor({ active, baseAmount, type, upfrontDiscount, upfrontDiscountAmount, allowCoupons, couponDiscount, numberOfInstallments }) {
    this.active = active;
    this.baseAmount = baseAmount;
    this.type = type;
    this.upfrontDiscount = upfrontDiscount;
    this.upfrontDiscountAmount = upfrontDiscountAmount;
    this.allowCoupons = allowCoupons;
    this.couponDiscount = couponDiscount;
    this.numberOfInstallments = numberOfInstallments ?? null;
  }
}

class Product {
  constructor(data) {
    Object.assign(this, data);
    this.prices = data.prices.map((price) => new Price(price));
  }
}

export const productInfo = new Product(JSON.parse(readFileSync("./test-data/qa_data.json", "utf8")));

import { Price } from "./Price";

describe("Price", () => {
  it("should create a Price with a valid number", () => {
    const price = Price.create(999);
    expect(price.value).toBe(999);
  });

  it("should throw an error if the value is not a number", () => {
    expect(() => Price.create("not a number" as unknown as number)).toThrow(
      "Price must be a non-negative number"
    );
  });

  it("should throw an error if the value is NaN", () => {
    expect(() => Price.create(NaN)).toThrow(
      "Price must be a non-negative number"
    );
  });

  it("should throw an error if the value is negative", () => {
    expect(() => Price.create(-100)).toThrow(
      "Price must be a non-negative number"
    );
  });

  it("should format the price to CLP currency format", () => {
    const price = Price.create(999);
    expect(price.formatToCLP()).toBe("$999");
  });

  it("should return true for equal prices", () => {
    const price1 = Price.create(999);
    const price2 = Price.create(999);
    expect(price1.equals(price2)).toBe(true);
  });

  it("should return false for different prices", () => {
    const price1 = Price.create(999);
    const price2 = Price.create(1000);
    expect(price1.equals(price2)).toBe(false);
  });
});

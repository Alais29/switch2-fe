import { Url } from "./Url";

describe("Url", () => {
  it("should create a Url with a valid URL string", () => {
    const url = Url.create("https://example.com");
    expect(url.value).toBe("https://example.com");
  });

  it("should throw an error if the URL is empty", () => {
    expect(() => Url.create("")).toThrow("URL must be a non-empty string");
  });

  it("should throw an error if the URL is not a string", () => {
    expect(() => Url.create(123 as unknown as string)).toThrow(
      "URL must be a non-empty string"
    );
  });

  it("should throw an error for an invalid URL format", () => {
    expect(() => Url.create("invalid-url")).toThrow("Invalid URL: invalid-url");
  });

  it("should return true for equal URLs", () => {
    const url1 = Url.create("https://example.com");
    const url2 = Url.create("https://example.com");
    expect(url1.equals(url2)).toBe(true);
  });

  it("should return false for different URLs", () => {
    const url1 = Url.create("https://example.com");
    const url2 = Url.create("https://another-example.com");
    expect(url1.equals(url2)).toBe(false);
  });
});

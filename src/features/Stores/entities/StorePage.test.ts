import { StorePage } from "./StorePage";

const mockStorePageProps = {
  id: "1",
  product: "Laptop",
  storeName: "TechStore",
  url: "https://techstore.com/laptop",
  price: 999,
};

describe("StorePage", () => {
  it("should create a StorePage with valid properties", () => {
    const storePage = StorePage.create(mockStorePageProps);

    expect(storePage.id).toBe("1");
    expect(storePage.product).toBe("Laptop");
    expect(storePage.storeName).toBe("TechStore");
    expect(storePage.url.value).toBe("https://techstore.com/laptop");
    expect(storePage.price.value).toBe(999);
  });

  it("should throw an error if id is missing", () => {
    const missingId = {
      ...mockStorePageProps,
      id: "",
    };
    expect(() => StorePage.create(missingId)).toThrow(
      "StorePage creation failed with errors: id is required"
    );
  });

  it("should throw an error if storeName is missing", () => {
    const missingStoreName = {
      ...mockStorePageProps,
      storeName: "",
    };

    expect(() => StorePage.create(missingStoreName)).toThrow(
      "StorePage creation failed with errors: storeName is required"
    );
  });

  it("should throw an error if product is missing", () => {
    const missingProduct = {
      ...mockStorePageProps,
      product: "",
    };

    expect(() => StorePage.create(missingProduct)).toThrow(
      "StorePage creation failed with errors: product is required"
    );
  });

  it("should throw all errors if multiple properties are missing", () => {
    const missingAll = {
      ...mockStorePageProps,
      id: "",
      product: "",
      storeName: "",
    };

    expect(() => StorePage.create(missingAll)).toThrow(
      "StorePage creation failed with errors: id is required, storeName is required, product is required"
    );
  });

  it("should compare two StorePage instances with the same id and return true", () => {
    const storePage1 = StorePage.create(mockStorePageProps);
    const storePage2 = StorePage.create(mockStorePageProps);

    expect(storePage1.equals(storePage2)).toBeTruthy();
  });

  it("should compare two StorePage instances with different ids and return false", () => {
    const storePage1 = StorePage.create(mockStorePageProps);
    const storePage2 = StorePage.create({
      ...mockStorePageProps,
      id: "2",
    });

    expect(storePage1.equals(storePage2)).toBeFalsy();
  });
});

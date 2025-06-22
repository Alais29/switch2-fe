import { StorePage } from "../entities/StorePage";
import { GetStoresUseCase } from "../useCases/getStoresUseCase";
import { vi } from "vitest";

const stores = [
  StorePage.create({
    id: "1",
    product: "Product 1",
    storeName: "Store 1",
    url: "http://example.com/1",
    price: 100,
  }),
  StorePage.create({
    id: "2",
    product: "Product 2",
    storeName: "Store 2",
    url: "http://example.com/2",
    price: 200,
  }),
];

describe("GetStoresUseCase", () => {
  it("should return a list of stores", async () => {
    const useCase = givenThereAreStores();

    const stores = await useCase.execute();

    expect(stores).toEqual(stores);
  });
});

function givenThereAreStores(): GetStoresUseCase {
  return new GetStoresUseCase({
    getStores: vi.fn().mockResolvedValue(stores),
  });
}

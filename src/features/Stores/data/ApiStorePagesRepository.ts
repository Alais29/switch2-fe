import { StorePage, type StorePageProps } from "../domain/entities/StorePage";
import type { StorePageRepository } from "../domain/repositories/StorePageRepository";

export class ApiStorePagesRepository implements StorePageRepository {
  private readonly apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async getStores(): Promise<StorePage[]> {
    try {
      const response = await fetch(`${this.apiUrl}/GetAllWebsite`);
      const data = await response.json();
      return data.map((storeData: StorePageProps) =>
        StorePage.create(storeData)
      );
    } catch (error) {
      throw new Error(
        `Failed to fetch stores: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
}

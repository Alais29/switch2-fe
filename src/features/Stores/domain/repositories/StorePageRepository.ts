import type { StorePage } from "../entities/StorePage";

export interface StorePageRepository {
  getStores(): Promise<StorePage[]>;
}

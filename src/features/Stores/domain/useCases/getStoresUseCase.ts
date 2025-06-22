import type { StorePage } from "../entities/StorePage";
import type { StorePageRepository } from "../repositories/StorePageRepository";

export class GetStoresUseCase {
  private storePageRepository: StorePageRepository;

  constructor(storePageRepository: StorePageRepository) {
    this.storePageRepository = storePageRepository;
  }

  async execute(): Promise<StorePage[]> {
    return this.storePageRepository.getStores();
  }
}

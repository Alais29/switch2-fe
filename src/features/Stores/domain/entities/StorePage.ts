import { Price } from "../value-objects/Price";
import { Url } from "../value-objects/Url";

interface StoreData {
  id: string;
  product: string;
  storeName: string;
  url: Url;
  price: Price;
}

export interface StorePageProps {
  id: string;
  product: string;
  storeName: string;
  url: string;
  price: number;
}

export class StorePage {
  public readonly id: string;
  public readonly product: string;
  public readonly storeName: string;
  public readonly url: Url;
  public readonly price: Price;

  private constructor(props: StoreData) {
    this.id = props.id;
    this.product = props.product;
    this.storeName = props.storeName;
    this.url = props.url;
    this.price = props.price;
  }

  public static create(props: StorePageProps): StorePage {
    return this.validateAndCreate(props);
  }

  private static validateAndCreate(props: StorePageProps): StorePage {
    const errors: Error[] = [];
    if (!props.id) {
      errors.push(new Error("id is required"));
    }
    if (!props.storeName) {
      errors.push(new Error("storeName is required"));
    }
    if (!props.product) {
      errors.push(new Error("product is required"));
    }

    if (errors.length > 0) {
      throw new Error(
        `StorePage creation failed with errors: ${errors
          .map((e) => e.message)
          .join(", ")}`
      );
    }

    return new StorePage({
      id: props.id,
      product: props.product,
      storeName: props.storeName,
      url: Url.create(props.url),
      price: Price.create(props.price),
    });
  }

  public equals(other: StorePage): boolean {
    if (this === other) {
      return true;
    }

    if (other.id === this.id) {
      return true;
    }

    return false;
  }
}

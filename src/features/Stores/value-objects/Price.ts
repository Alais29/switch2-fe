export class Price {
  public readonly value: number;

  private constructor(value: number) {
    this.value = value;
  }
  public static create(value: number): Price {
    if (typeof value !== "number" || isNaN(value) || value < 0) {
      throw new Error("Price must be a non-negative number");
    }
    return new Price(value);
  }

  public formatToCLP(): string {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(this.value);
  }

  public equals(other: Price): boolean {
    return this.value === other.value;
  }
}

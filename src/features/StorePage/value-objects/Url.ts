const urlPattern =
  /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&//=]*)$/;

export class Url {
  public readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): Url {
    if (!value || typeof value !== "string") {
      throw new Error("URL must be a non-empty string");
    }

    const isValid = urlPattern.test(value);
    if (!isValid) {
      throw new Error(`Invalid URL: ${value}`);
    }

    return new Url(value);
  }

  equals(other: Url): boolean {
    return this.value === other.value;
  }
}

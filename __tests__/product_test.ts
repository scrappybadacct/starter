import { isNone, isSome, getOrElse } from "fp-ts/lib/Option";
import { product } from "../src/cs-algos/product";

describe("product", () => {
  it("return none if array is empty", () => {
    const x = product([]);
    expect(isNone(x)).toBe(true);
  });

  it("should return some if array is not empty.", () => {
    const x = product([2, 4, 5]);
    expect(isSome(x)).toBe(true);
  });

  it("should return the correct product within the some value", () => {
    const x = product([2, 4, 5]);
    const val = getOrElse(() => null)(x);
    expect(val).toBe(40);
  });
});

import { recursiveRange } from "../src/cs-algos/recursiveRange";

describe("recursiveRange", () => {
  it("should return 0 if input n is 0", () => {
    const x = recursiveRange(0);
    expect(x).toBe(0);
  });

  it("should return the correct sum for positive integers", () => {
    const x = recursiveRange(10);
    expect(x).toBe(55);
  });

  it("should return the correct sum for negative integers", () => {
    const x = recursiveRange(-10);
    expect(x).toBe(-55);
  });
});

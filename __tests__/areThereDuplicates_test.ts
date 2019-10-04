import areThereDuplicates from "../src/cs-algos/areThereDuplicates";

describe("areThereDuplicates", () => {
  it("should return false if no arguments are passed in", () => {
    const x = areThereDuplicates();
    expect(x).toBe(false);
  });

  it("should return false if all arguments given are unique", () => {
    const x = areThereDuplicates(1, 2, 3, 4);
    expect(x).toBe(false);
  });

  it("should return true if there are duplicates in the input", () => {
    const x = areThereDuplicates(1, 1);
    expect(x).toBe(true);
  });
});

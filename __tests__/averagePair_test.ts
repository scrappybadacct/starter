import averagePair from "../src/cs-algos/averagePair";

describe("averagePair", () => {
  it("should return false if there are fewer than two values in the array.", () => {
    const x = averagePair([], 0);
    expect(x).toBe(false);
  });

  it("should return false if no two numbers average to the target", () => {
    const x = averagePair([-1, 0, 3, 4, 5, 6], 4.1);
    expect(x).toBe(false);
  });

  it("should return true if two numbers in the input array average to the target", () => {
    const x = averagePair([1, 2, 3], 2.5);
    expect(x).toBe(true);
  });
});

import { capitalizeWords } from "../src/cs-algos/capitalizeWords";

function isCaps(s: string): boolean {
  return s === s.toUpperCase();
}

describe("capitalizeWords", () => {
  it("should return an empty array if passed an empty array.", () => {
    const x = capitalizeWords([]);
    expect(x).toEqual([]);
  });

  it("should return an array containing all capital letters.", () => {
    const x = capitalizeWords(["i", "am", "learning", "recursion"]);
    const bool = x.every(isCaps);
    expect(bool).toBe(true);
  });
});

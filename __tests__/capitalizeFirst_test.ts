import { flow } from "fp-ts/lib/function";
import { capitalizeFirst } from "../src/cs-algos/capitalizeFirst";

function firstChar(s: string): string {
  return s[0];
}

function isCaps(s: string): boolean {
  return s === s.toUpperCase();
}

const firstCharIsCaps = flow(
  firstChar,
  isCaps
);

describe("capitalizeFirst", () => {
  it("should return an empty array if given an empty array", () => {
    const x = capitalizeFirst([]);
    expect(x).toEqual([]);
  });

  it("should return a array where all initial characters of strings are capitalized", () => {
    const x = capitalizeFirst(["taco", "car", "banana"]);
    const bool = x.every(firstCharIsCaps);
    expect(bool).toBe(true);
  });
});

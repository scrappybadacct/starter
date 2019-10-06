import * as fc from "fast-check";

import { Option, isNone, exists, some, none } from "fp-ts/lib/Option";
import { Eq } from "fp-ts/lib/Eq";
import { ordNumber } from "fp-ts/lib/Ord";

import { Index, index } from "../src/types";

import { numberSearch } from "../src/cs-algos/search/linearSearch";

//
// ─── SETUP ──────────────────────────────────────────────────────────────────────
//

// Wrapper function for Native search to match type signature of linearSearch.
function wrappedNativeSearch<A>(E: Eq<A>): (tgt: A, xs: A[]) => Option<number> {
  return (tgt, xs) => {
    const x = xs.indexOf(tgt);
    return x === -1 ? none : some(x);
  };
}

// initialize general wrapper function with one number type instance.
const wrappedNumberSearch = wrappedNativeSearch(ordNumber);

const testData = [1, 2, 3, 4, 5];

//
// ─── TESTS ──────────────────────────────────────────────────────────────────────
//

describe("linearSearch", () => {
  it("should return None when the target element is not found", () => {
    const x = numberSearch(6, testData);
    const bool = isNone(x);
    expect(bool).toBe(true);
  });

  it("should return none specifically if array is empty", () => {
    const x = numberSearch(6, []);
    const bool = isNone(x);
    expect(bool).toBe(true);
  });

  it("should return Some of idx if element exists in array", () => {
    const x = numberSearch(4, testData);
    const bool = exists<number>(x => x === 3)(x);
    expect(bool).toBe(true);
  });

  it("should match native indexOf(adapted to use Options)", () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), fc.integer(), (data, tgt) => {
        const x = numberSearch(tgt, data);
        const y = wrappedNumberSearch(tgt, data);
        expect(x).toEqual(y);
      })
    );
  });
});

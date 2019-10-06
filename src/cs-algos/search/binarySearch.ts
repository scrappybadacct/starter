import { Option, some, none } from "fp-ts/lib/Option";
import { Eq } from "fp-ts/lib/Eq";
import { Ord, ordNumber } from "fp-ts/lib/Ord";
import { sequenceT } from "fp-ts/lib/Apply";
import { flow, flip } from "fp-ts/lib/function";
import { Index, index } from "../../types";

function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

function add(augend: number, addend: number): number {
  return augend + addend;
}

function divide(quotient: number): (dividend: number) => number {
  return dividend => dividend / quotient;
}

const findMid = flow(
  add,
  divide(2),
  Math.floor
);

function binarySearch<A>(tc: Ord<A>): (tgt: A, xs: A[]) => Option<number> | undefined {
  return (tgt, xs) => {
    let start = 0;
    let end = xs.length - 1;

    while (true) {
      if (start > end) return none;
      const mid = findMid(start, end);
      const ord = tc.compare(tgt, xs[mid]);
      if (ord === 0) return some(mid);
      if (ord === -1) end = mid - 1;
      if (ord === 1) start = mid + 1;
    }
  };
}

export const numBinarySearch = binarySearch(ordNumber);

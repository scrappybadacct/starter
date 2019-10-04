import { isSome, isNone, getOrElse } from "fp-ts/lib/Option";
import { fib } from "../src/cs-algos/fib";

describe("fib", () => {
  it("should return none if given a negative number", () => {
    const x = fib(-1);
    expect(isNone(x)).toBe(true);
  });

  it("should return Some(1) if input is 0", () => {
    const x = fib(0);
    const val = getOrElse(() => 0)(x);
    expect(isSome(x)).toBe(true);
    expect(val).toBe(1);
  });

  it("should return Some(1) if input is 1 or 2", () => {
    const x = fib(1);
    const y = fib(2);

    const valX = getOrElse(() => 0)(x);
    const valY = getOrElse(() => 0)(y);

    expect(valX).toBe(1);
    expect(valY).toBe(1);
  });

  it("should return Some(fib n) for n", () => {
    const x = fib(10);
    const val = getOrElse(() => 1)(x);

    expect(val).toBe(55);
  });
});

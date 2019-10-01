import { Option, some, none } from "fp-ts/lib/Option";
// import { isEmpty, head, tail } from "./src/lib";

function innerFib(n: number): number {
  if (n <= 2) return 1;
  return innerFib(n - 1) + innerFib(n - 2);
}

export function fib(n: number): Option<number> {
  if (n < 0) return none;
  return some(innerFib(n));
}

export function iterFib(n: number): Option<number> {
  if (n < 0) return none;
  if (n <= 2) return some(1);

  let env = { cnt: 3, prev: 1, sum: 2 };

  while (true) {
    const { cnt, prev, sum } = env;

    if (cnt >= n) return some(sum);

    env = { cnt: cnt + 1, prev: sum, sum: prev + sum };
  }
}

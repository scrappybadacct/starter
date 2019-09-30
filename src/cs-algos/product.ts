import { Option, some, none } from "fp-ts/lib/Option";
import { isEmpty, head, tail } from "../lib";

function innerProduct(xs: number[]): number {
  if (isEmpty(xs)) return 1;
  return head(xs) * innerProduct(tail(xs));
}

export function product(xs: number[]): Option<number> {
  if (isEmpty(xs)) return none;
  return some(innerProduct(xs));
}

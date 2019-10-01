import { flow } from "fp-ts/lib/function";
import { isEmpty, head, tail } from "../lib";

function upperCaseString(s: string): string {
  return s.toUpperCase();
}

const capitalizeHead = flow(
  head as (arr: string[]) => string,
  upperCaseString
);

const capitalizeTail = flow(
  tail as (xs: string[]) => string[],
  capitalizeWords
);

export function capitalizeWords(xs: string[]): string[] {
  if (isEmpty(xs)) return xs;
  return [capitalizeHead(xs), ...capitalizeTail(xs)];
}

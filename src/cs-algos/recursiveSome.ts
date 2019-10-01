import { isEmpty, head, tail } from "../lib";

export function recursiveSome<T>(pred: (x: T) => boolean, arr: T[]): boolean {
  if (isEmpty(arr)) return false;
  return pred(head(arr)) || recursiveSome(pred, tail(arr));
}

export function iterSome<T>(pred: (x: T) => boolean, arr: T[]): boolean {
  while (true) {
    if (isEmpty(arr)) return false;
    if (pred(head(arr))) return true;

    arr = tail(arr);
  }
}

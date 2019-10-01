/* 
  I had to upgrade typescript to the latest version in order to get recursive types to work.
  I did that after I noticed that my mutually recursing version included below stopped throwing errors,
  (at least in vscode) after about four levels.
  
  Also, I tried compiling it to see if that had an effect but it seems it genuinely doesn't have a problem with it.

  Perhaps I'm doing something wrong but I copied and pasted from Anders Hejlberg lol.

  Anyway...

e.g.:
  interface NestArray<T> {
    [index: number]: T | NestedArray<T>;
  } 

  type NestedArray<T> = T | Array<T> | NestArray<T>;
*/

import { isEmpty, head, tail } from "../lib";

type ValueOrArray<T> = T | Array<ValueOrArray<T>>;

export function flatten(xs: ValueOrArray<number>[]): number[] {
  if (isEmpty(xs)) return xs as [];

  const [hd, tl] = [head(xs), tail(xs)];

  if (Array.isArray(hd)) return [...flatten(hd), ...flatten(tl)];
  return [hd, ...flatten(tl)];
}

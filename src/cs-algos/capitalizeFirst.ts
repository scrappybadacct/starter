import { isEmpty, head, tail } from "../lib";

export function capitalizeFirst(xs: string[]): string[] {
  if (isEmpty(xs)) return xs as [];

  const [hd, tl] = [head(xs), tail(xs)];
  const capFirst = hd.slice(0, 1).toUpperCase() + hd.slice(1);
  return [capFirst, ...capitalizeFirst(tl)];
}

/*
    areThereDuplicates
    Accepts a variable number of arguments, and checks if any are duplicated.
*/

export default function areThereDuplicates(...args: string[] | number[]): boolean {
  const seen = new Map();

  for (const e of args) {
    // so far as I am aware, Map.prototype.has is constant, (or constant for all practical purposes.)
    if (seen.has(e)) {
      return true;
    }

    seen.set(e, true);
  }

  return false;
}

// rec

function dupesIt(args: (string | number)[]): boolean {
  if (args.length > 1) {
    const [head, ...tail] = args;
    if (head === tail[0]) return true;
    return dupesIt(tail);
  }

  if (args.length === 1) return false;
  return false;
}

export function recAreThereDupes(...args: string[] | number[]): boolean {
  return dupesIt(args.sort());
}

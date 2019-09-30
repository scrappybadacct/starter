import { getOrDefault } from "./index";
import { FrequencyMap } from "../types";

export function freqMap(str: string): FrequencyMap {
  const fm: FrequencyMap = new Map();

  for (const char of str) {
    const count: number = getOrDefault(fm, char, 1);
    fm.set(char, count);
  }

  return fm;
}

type FreqMapOptions = {
  predicate?: (str: string) => boolean;
  transform?: (str: string) => string;
};

function id<T>(e: T): T {
  return e;
}

export function freqMapWithOptions(
  str: string,
  options: FreqMapOptions = {}
): FrequencyMap {
  const fm: FrequencyMap = new Map();

  let { predicate, transform } = options;

  predicate = predicate || ((): boolean => true);
  transform = transform || id;

  for (const char of str) {
    if (predicate(char)) {
      const chr = transform(char);

      const count: number = getOrDefault(fm, chr, 0) + 1;
      fm.set(char, count);
    }
  }

  return fm;
}

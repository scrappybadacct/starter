import range from "./range";

export function exists<T>(obj: T | null | undefined): boolean {
  return obj != null;
}

export function getOrDefault<K, V>(map: Map<K, V>, key: K, def: V): V {
  const maybe = map.get(key);
  return exists<V>(maybe) ? (maybe as V) : def;
}

export function isPrime(n: number): boolean | number {
  for (const num of range(2, n - 1)) {
    if (n % num === 0) return num;
  }

  return true;
}

type GenericObject = { [key: string]: unknown };

// returns "tuple" of k, v or null, and the rest of the object with the prop deleted.
export function popProp(obj: {
  [key: string]: unknown;
}): [[string, unknown] | null, GenericObject] {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const newObj = [prop, obj[prop]] as [string, unknown];
      delete obj[prop];

      return [newObj, obj];
    }
  }
  return [null, obj];
}

export function isEmpty<T>(arr: T[]): boolean {
  return arr.length === 0;
}

export function head<T>(arr: T[]): T {
  const [head] = arr;
  return head;
}

export function tail<T>(arr: T[]): T[] {
  const [, ...tail] = arr;
  return tail;
}

export function strHead(s: string): string {
  return s.slice(0, 1);
}

export function strTail(s: string): string {
  return s.slice(1);
}

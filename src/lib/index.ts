export { add, multiply, divide, subtract } from "./operations";
export { default as range } from "./range";
export { freqMapWithOptions as freqMap } from "./freqMap";

export function exists<T>(obj: T | null | undefined): boolean {
    return obj != null;
}

export function getOrDefault<K, V>(map: Map<K, V>, key: K, def: V): V {
    const maybe = map.get(key);
    return exists<V>(maybe) ? (maybe as V) : def;
}

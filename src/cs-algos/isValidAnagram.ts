import { FrequencyMap } from "../types";
import { freqMap } from "../lib";

function compareMaps<K, V>(one: Map<K, V>, two: Map<K, V>): boolean {
    if (one.size !== two.size) return false;

    for (const [k, v] of one) {
        // note: does not compare objects.
        if (two.get(k) !== v) {
            return false;
        }
    }

    return true;
}

export default function isValidAnagram(one: string, two: string): boolean {
    const makeFreqMaps = (str: string): FrequencyMap =>
        freqMap(str, {
            predicate: str => /\w/.test(str),
            transform: str => str.toLowerCase()
        });

    const [first, second] = [one, two].map(makeFreqMaps);

    return compareMaps(first, second);
}

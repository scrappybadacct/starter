import { FrequencyMap } from "../types";
import { freqMapWithOptions as freqMap } from "../lib/freqMap";

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

/* ------------------------------------Recursive Exercise-------------------------------------------------- */

type Freq = { [key: string]: number };

function recFreqMap(str: string, map: Freq = {}): Freq {
    const [head, tail] = [str.slice(0, 1), str.slice(1)];
    if (!head) return map;
    return recFreqMap(tail, { ...map, ...{ [head]: map[head] + 1 || 1 } });
}

function compareSortedKeyValuePairs(
    lstOne: [string, number][],
    lstTwo: [string, number][]
): boolean {
    if (lstOne.length > 0) {
        // destructuring doesn't like empty values
        const [kA, vA] = lstOne[0];
        const [kB, vB] = lstTwo[0];
        if (kA !== kB || vA !== vB) return false;
    }

    if (lstOne.length > 1) {
        // destructuring doesn't like empty values
        const [[, ...tailA], [, ...tailB]] = [lstOne, lstTwo];
        return compareSortedKeyValuePairs(tailA, tailB);
    }

    return true;
}

function compareFreqs(one: Freq, two: Freq): boolean {
    // aside from the stack trace this is the hairy bit.
    // import popProp and try again.
    const [lstOne, lstTwo] = [Object.entries(one), Object.entries(two)].map(e =>
        e.sort(([kA], [kB]) => (kA > kB ? 1 : -1))
    );

    if (lstOne.length !== lstTwo.length) return false;
    return compareSortedKeyValuePairs(lstOne, lstTwo);
}

export function recIsValidAnagram(one: string, two: string): boolean {
    return compareFreqs(recFreqMap(one), recFreqMap(two));
}

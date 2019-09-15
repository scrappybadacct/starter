/*
    sameFrequency
    Given two positive integers, find out if the two numbers have the same frequency of digits.
*/

export default function sameFrequency(one: number, two: number): boolean {
    // fix to move the sanity check up to cut out the map creation.

    const strs = [String(one), String(two)];

    if (strs[0].length !== strs[1].length) return false;

    const [mapOne, mapTwo] = strs.map(e => {
        const freqMap = new Map();

        for (const digit of e) {
            if (freqMap.has(digit)) {
                freqMap.set(digit, freqMap.get(digit) + 1);
                continue;
            }

            freqMap.set(digit, 1);
        }

        return freqMap;
    });

    for (const [k, v] of mapOne.entries()) {
        if (!mapTwo.has(k)) return false;
        if (mapTwo.get(k) !== v) return false;
    }

    return true;
}

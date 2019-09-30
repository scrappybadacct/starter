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

// recursive version.

function getDefault<T>(def: T, key: string, map: Map<string, T>): T {
  return map.get(key) || def;
}

function reqMap(str: string, map = new Map<string, number>()): Map<string, number> {
  if (str.length >= 1) {
    const [head, tail] = [str.slice(0, 1), str.slice(1)];
    if (/\w/.test(head)) {
      map.set(head.toLowerCase(), getDefault(0, head.toLowerCase(), map) + 1);
    }
    return reqMap(tail, map);
  }

  return map;
}

function digitFreq(n: number): Map<string, number> {
  return reqMap(String(n));
}

function compareIter(arr: [string, number][], map: Map<string, number>): boolean {
  if (arr.length) {
    const [[k, v], ...tail] = arr;
    if (map.get(k) !== v) return false;
    return compareIter(tail, map);
  }

  return true;
}

function compareFreqMaps(
  mapOne: Map<string, number>,
  mapTwo: Map<string, number>
): boolean {
  if (mapOne.size !== mapTwo.size) return false;
  return compareIter([...mapOne.entries()], mapTwo);
}

export function recSameFrequency(one: number, two: number): boolean {
  return compareFreqMaps(digitFreq(one), digitFreq(two));
}

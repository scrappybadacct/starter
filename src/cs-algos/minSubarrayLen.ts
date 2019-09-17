export default function minSubarrayLength(arr: number[], tgt: number): number | null {
    if (!arr.length) return null;

    let minLen = Infinity;

    let st = 0;
    let sum = 0;

    for (const [i, num] of arr.entries()) {
        sum += num;

        while (sum >= tgt) {
            sum -= arr[st];

            if (sum >= tgt) minLen = Math.min(minLen, i - st);

            st += 1;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

minSubarrayLength([2, 3, 1, 2, 4, 3], 7); //?

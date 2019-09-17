function avg2(one: number, two: number): number {
    return (one + two) / 2;
}

export default function averagePair(arr: number[], tgt: number): boolean {
    if (arr.length < 2) return false;

    let [slow, fast] = [0, arr.length - 1];

    while (slow < fast) {
        const res = Math.sign(tgt - avg2(arr[slow], arr[fast]));

        if (res === 0) return true;
        if (res === 1) slow += 1;
        if (res === -1) fast -= 1;
    }

    return false;
}

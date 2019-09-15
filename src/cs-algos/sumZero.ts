export default function sumZero(arr: number[]): [number, number] | undefined {
    let [left, right] = [0, arr.length - 1];

    while (left < right) {
        const sign = Math.sign(arr[left] + arr[right]);

        if (sign === 0) return [arr[left], arr[right]];
        if (sign === 1) right -= 1;
        if (sign === -1) left += 1;
    }
}

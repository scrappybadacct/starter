/*
    Accepts a sorted array of numbers, which may be negative and counts the number of unique values in the array.
    Hint: use multiple pointers pattern.

    The trick is using two pointer to manipulate the array in place and store the unique values at the start of the array.
*/

export default function countUniqueValues(arr: number[]): number[] {
    let [slow, fast] = [0, 1];

    while (fast <= arr.length) {
        if (arr[slow] !== arr[fast]) {
            slow += 1;
            arr[slow] = arr[fast];
        }

        fast += 1;
    }

    return arr.slice(0, slow);
}

// TODO: refactor

export default function maxSubarraySum(arr: number[], num: number): number | null {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += i;
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

export function recMaxSubarraySum(
  arr: number[],
  num: number,
  max = -1,
  slice = arr.slice(0, num)
): number | null {
  if (slice.length < num) return max !== -1 ? max : null;
  const sum = slice.reduce((acc, e) => acc + e); // adds new total everytime.
  return recMaxSubarraySum(arr.slice(1), num, Math.max(max, sum));
}

function add(n: number, n2: number): number {
  return n + n2;
}

// I'm doing the first round of calcs in the params,
// but this would work just as well if I had an outer calling function that handled set up before recursion.

// * Having to mainipulate the indexes in a funny way like that is a bit jank.
export function otherRecMaxSubarraySum(
  arr: number[],
  num: number,
  total = arr.slice(0, num).reduce(add, 0),
  max = arr.length < num ? null : total
): number | null {
  if (num + 1 > arr.length) return max; // !

  if (arr.length >= 2) {
    const [head, ...tail] = arr;
    total = total - head + tail[num - 1]; //!
    return otherRecMaxSubarraySum(tail, num, total, Math.max(max as number, total));
  }

  return total;
}

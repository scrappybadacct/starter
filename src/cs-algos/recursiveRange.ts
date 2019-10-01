export function recursiveRange(n: number): number {
  const ord = Math.sign(n);
  if (ord === 0) return 0;

  let env = { cnt: 0, sum: 0 };

  while (true) {
    const { cnt, sum } = env;

    if (cnt > Math.abs(n)) return ord * sum;

    env = { cnt: cnt + 1, sum: sum + cnt };
  }
}

function innerRecRange(n: number): number {
  if (n === 1) return 1;
  return n + innerRecRange(n - 1);
}

export function recRange(n: number): number {
  const ord = Math.sign(n);
  if (ord === 0) return 0;
  return ord * innerRecRange(Math.abs(n));
}

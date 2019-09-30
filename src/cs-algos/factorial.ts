export function factorial(n: number): number {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

export function tailFac(n: number, fac = 1): number {
  if (n < 1) return 0;
  if (n === 1) return fac;
  return tailFac(n - 1, n * fac);
}

export function iterFac(n: number): number {
  // sanity / input check
  if (n < 1) return 0;

  // define environment for loop.
  let env = { n, fac: 1 };

  // create constant loop
  while (true) {
    // unpack environment locally.
    const { n, fac } = env;

    // base case(s)
    if (n === 1) return fac;

    // update env before next iteration to approximate recursive function call.
    env = { n: n - 1, fac: n * fac };
  }
}

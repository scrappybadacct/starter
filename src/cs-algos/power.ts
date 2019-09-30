export function power(base: number, exponent: number): number {
  if (exponent < 1) return 1;
  return base * power(base, exponent - 1);
}

export function tailPower(base: number, exponent: number, power = 1): number {
  if (exponent < 1) return power;
  return tailPower(base, exponent - 1, power * base);
}

export function iterPower(base: number, exponent: number): number {
  let env = { base, exponent, power: 1 }; // something I'm playing around with. Possibly type as well?

  while (true) {
    const { base, exponent, power } = env;

    if (exponent < 1) return power;

    env = { base, exponent: exponent - 1, power: base * power };
  }
}

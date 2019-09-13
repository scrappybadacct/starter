export function add(augend: number, addend: number): number {
    const sum = augend + addend;
    return sum;
}

export function multiply(multiplicand: number, multiplier: number): number {
    const product = multiplicand * multiplier;
    return product;
}

export function subtract(minuend: number, subtrahend: number): number {
    const difference = minuend - subtrahend;
    return difference;
}

export function divide(dividend: number, divisor: number): number {
    const quotient = dividend / divisor;
    return quotient;
}

export function inc(n: number): number {
    return n + 1;
}

export function dec(n: number): number {
    return n - 1;
}

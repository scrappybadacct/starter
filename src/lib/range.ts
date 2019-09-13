export default function* range(...args: number[]): Generator<number> {
    const len = args.length;
    if (len < 1 || len > 3) throw new Error("Insuffient arguments for range.");

    const vals = ((args): number[] => {
        if (len === 3) return [args[0], args[1], args[2]];

        if (len === 2) {
            const step = args[0] >= args[1] ? -1 : 1;
            return [args[0], args[1], step];
        }

        if (len === 1) return [1, args[0], 1];

        return [];
    })(args);

    vals.forEach((e, i, arr) => {
        const num = Number(e);
        if (isNaN(num)) throw new Error("A value given to range is not castable to number.");

        arr[i] = num;
    });

    const [start, end, step] = vals;

    if (Math.sign(end - start) != Math.sign(step))
        throw new Error("If end is greater than start, step must be positive. And vice versa.");

    const predicate =
        Math.sign(step) === 1
            ? (cnt: number): boolean => cnt <= end
            : (cnt: number): boolean => cnt >= end;

    let cnt = start;

    while (predicate(cnt)) {
        yield cnt;
        cnt += step;
    }
}

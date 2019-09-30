import { factorial } from "../src/cs-algos/factorial";

describe("factorial", () => {
  it("should return 0 if input n is 0", () => {
    const x = factorial(0);
    expect(x).toBe(0);
  });

  it("should return 1 when input n is 1", () => {
    const x = factorial(1);
    expect(x).toBe(1);
  });

  it("should return the factorial if input is greater than 1", () => {
    const x = factorial(4);
    expect(x).toBe(24);
  });
});

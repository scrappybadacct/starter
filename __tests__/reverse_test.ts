import { reverse } from "../src/cs-algos/reverse";

describe("reverse", () => {
  it("should return an empty string when input is an empty string", () => {
    const x = reverse("");
    expect(x).toBe("");
  });

  it("should return the reverse of a string if string is not empty", () => {
    const x = reverse("hello");
    expect(x).toBe("olleh");
  });
});

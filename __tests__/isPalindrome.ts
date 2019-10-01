import { isPalindrome } from "../src/cs-algos/isPalindrome";

describe("isPalindrome", () => {
  it("should return true if string is empty", () => {
    const x = isPalindrome("");
    expect(x).toBe(true);
  });

  it("should return true if string is a palindrome", () => {
    const x = isPalindrome("helloolleh");
    expect(x).toBe(true);
  });

  it("should return false if string is not a palindrome", () => {
    const x = isPalindrome("hello");
    expect(x).toBe(false);
  });
});

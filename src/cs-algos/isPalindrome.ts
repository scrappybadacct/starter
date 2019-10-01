export function isPalindrome(s: string): boolean {
  const rev = s.split("").reduce((acc, e) => `${e}${acc}`, "");
  return s === rev;
}

import isValidAnagram from "../src/cs-algos/isValidAnagram";

describe("isValidAnagram", () => {
    it("should return true if strings are anagrams", () => {
        expect(isValidAnagram("texttwisttime", "timetwisttext")).toBe(true);
    });

    it("should return false if strings are not anagrams", () => {
        expect(isValidAnagram("awesome", "awesom4")).toBe(false);
    });

    it("should return false if strings are not equal", () => {
        expect(isValidAnagram("dog", "dogg")).toBe(false);
    });

    it("should return true is strings are both empty", () => {
        expect(isValidAnagram("", "")).toBe(true);
    });
});

/*
    isSubsequence
    Takes two strings and returns true when the same ordering of characters in the first appears in the second,
    although there may be intervening characters.
*/

export default function isSubsequence(subSeq: string, seq: string): boolean {
  let pl = 0;

  for (const char of seq) {
    if (char === subSeq[pl]) {
      pl += 1;
      if (pl >= subSeq.length) {
        return true;
      }
    }
  }
  return false;
}

// Recursive solution
// I didn't write this, so I'll annotate it.

export function recIsSubsequence(str1: string, str2: string): boolean {
  if (str1.length === 0) return true; //we are popping off strings as we go, if we reach the end of the sb..
  if (str2.length === 0) return false; //if we hit the end of the str we are checking first.

  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1)); // if we find a dupe slice from both.
  return isSubsequence(str1, str2.slice(1)); // else slice from only one.
}

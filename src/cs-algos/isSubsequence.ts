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

/*
    Recursive solution

    function isSubsequence(str1, str2) {
        if(str1.length === 0) return true
        if(str2.length === 0) return false
        if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
        return isSubsequence(str1, str2.slice(1))
    }
*/

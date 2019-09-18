/*
    areThereDuplicates
    Accepts a variable number of arguments, and checks if any are duplicated.
*/

export default function areThereDuplicates(...args: string[] | number[]): boolean {
    const seen = new Map();

    for (const e of args) {
        // so far as I am aware, Map.prototype.has is constant, (or constant for all practical purposes.)
        if (seen.has(e)) {
            return true;
        }

        seen.set(e, true);
    }

    return false;
}

function recAreThereDupes(...args: string[] | number[]): boolean {
    return true;
}

/* 
Multipointer solution ---
I should have known the solution was simply to sort first. Is sorting itself O(n log n)?
I forgot. Yeah, it's pretty easy on a presorted array.
Maybe the binary one would still work though? 

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

One liner --

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
*/

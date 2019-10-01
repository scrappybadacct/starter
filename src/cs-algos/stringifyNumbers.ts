// Recursive Json type seems to work.
type JsonPrimitives = number | boolean | string | null;

interface JsonArrays {
  [index: number]: Array<JsonPrimitives> | JsonValidObject;
}
interface JsonValidObject {
  [key: string]: JsonPrimitives | JsonArrays | JsonValidObject;
}

type Json = JsonArrays | JsonValidObject;

// I was thinking about how to test for other kinds of objects, like promises or sets.
// Since we are defining objects as valid json objects only, it can be ignored for now.

// -- to expand this to other types like Sets, etc, or even other classes I think we just catalog them.
// Symbols might be dumb.
// I just can't believe I got this to type correctly, without even upgrading ts.
export function stringifyNumbers(x: Json | JsonPrimitives): Json | JsonPrimitives {
  if (typeof x === "number") return String(x);
  if (typeof x === "object") {
    if (Array.isArray(x)) return x.map(stringifyNumbers) as JsonArrays;
    for (const prop in x) {
      if (Object.prototype.hasOwnProperty.call(x, prop))
        (x as JsonValidObject)[prop] = stringifyNumbers((x as JsonValidObject)[prop]);
    }
  }
  return x;
}

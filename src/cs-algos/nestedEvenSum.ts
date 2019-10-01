/* 
  So, surprisingly enough this actually works, but it feels scrappy as fuck, especially the typing,
  and especially for most of the object functions.

  Most of this is an artifact of using POJOs and all the imprecision that comes with that.
  The point is to demonstrate an understanding of recursion which I think I have done.
  Either an iterative approach, or using a better ds like a map or record would take a lot of the scrappyness and inefficiency out,
  like having to make a clone of the object
*/

type NestedObj = {
  [key: string]: number | boolean | string | NestedObj;
};

type Obj = { [key: string]: unknown };

function isEmptyObj(obj: NestedObj): boolean {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) return false;
  }
  return true;
}

// not super happy with this, but having an option type was complicating things in this one case.
// I knew for a fact I'm checking if the object is empty before calling this function, and so far its only used in one case.
// I would have to either just unwrap it everytime, or figure out how to use the monad properly,
// It's just not needed right now.
function popProp(obj: NestedObj): [unknown, NestedObj] {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const x = obj[prop];

      const nu = Object.create(Object.getPrototypeOf(obj));
      for (const otherProp in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, otherProp) && otherProp !== prop) {
          nu[otherProp] = obj[otherProp];
        }
      }

      return [x, nu];
    }
  }
  return [{}, obj];
}

export function nestedEvenSum(obj: NestedObj): number {
  if (isEmptyObj(obj)) return 0;
  const [hd, tl] = popProp(obj);
  if (typeof hd === "number" && hd % 2 === 0) return hd + nestedEvenSum(tl);
  if (typeof hd === "object") return nestedEvenSum(hd as NestedObj) + nestedEvenSum(tl);
  return 0 + nestedEvenSum(tl);
}

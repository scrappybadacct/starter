import { Option, some, none, map } from "fp-ts/lib/Option";
import { Eq } from "fp-ts/lib/Eq";
import { ordNumber } from "fp-ts/lib/Ord";
import { Index, index } from "../../types";

function generalLinearSearch<A>(
  typeInstance: Eq<A>
): (tgt: A, xs: A[]) => Option<number> {
  return (tgt, xs) => {
    for (let i = 0; i < xs.length; i += 1) {
      if (typeInstance.equals(tgt, xs[i])) return some(i);
    }
    return none;
  };
}

export const numberSearch = generalLinearSearch(ordNumber);

// PS - I know that making an index a refinement on NonNegative Integer is overkill,
// in fact it all is,
// and very, very stupid besides, but I'm practicing and figuring stuff out right now.

import { Eq } from "fp-ts/lib/Eq";
import { iso } from "newtype-ts";
import {
  NonNegativeInteger,
  prismNonNegativeInteger
} from "newtype-ts/lib/NonNegativeInteger";

export type FrequencyMap = Map<string, number>;

// Recursive Json type seems to work.
export type JsonPrimitives = number | boolean | string | null;

export type JsonArrays = Array<JsonPrimitives | JsonValidObject>;

export interface JsonValidObject {
  [key: string]: JsonPrimitives | JsonArrays | JsonValidObject;
}

export type Json = JsonArrays | JsonValidObject | JsonPrimitives;

//
// ─── NEW TYPES ─────────────────────────────────────────────────────────────────
//

export interface Index extends NonNegativeInteger {}
export const index = prismNonNegativeInteger;

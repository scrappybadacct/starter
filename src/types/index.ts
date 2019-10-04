export type FrequencyMap = Map<string, number>;

// Recursive Json type seems to work.
export type JsonPrimitives = number | boolean | string | null;

export type JsonArrays = Array<JsonPrimitives | JsonValidObject>;

export interface JsonValidObject {
  [key: string]: JsonPrimitives | JsonArrays | JsonValidObject;
}

export type Json = JsonArrays | JsonValidObject | JsonPrimitives;

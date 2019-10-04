import { Json } from "../types";

export function collectStrings(obj: Json): string[] {
  if (typeof obj === "string") return [obj];
  if (typeof obj === "object" && obj != null) {
    return Array.isArray(obj)
      ? obj.reduce((acc: string[], e) => [...acc, ...collectStrings(e)], [])
      : Object.values(obj).reduce(
          (acc: string[], e) => [...acc, ...collectStrings(e)],
          []
        );
  }
  return [];
}

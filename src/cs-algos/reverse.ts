import { strHead, strTail } from "../lib";

export function reverse(s: string): string {
  if (s.length < 1) return "";
  return reverse(strTail(s)) + strHead(s);
}

export function iterReverse(s: string): string {
  if (s.length < 1) return "";

  let env = [s, ""];
  while (true) {
    const [e, acc] = env;

    if (e === "") return acc;

    env = [strTail(e), strHead(e) + acc];
  }
}

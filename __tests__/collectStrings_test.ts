import { collectStrings } from "../src/cs-algos/collectStrings";

const testObj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

const correctOutput = ["foo", "bar", "baz"];

describe("collectStrings", () => {
  it("should return an empty array if object does not contain strings", () => {
    const x = collectStrings({ foo: 0, bar: { baz: true } });
    expect(x).toEqual([]);
  });

  it("should return an empty array if object is empty", () => {
    const x = collectStrings({});
    expect(x).toEqual([]);
  });

  it("should return an array containing all the strings in a nested object", () => {
    const x = collectStrings(testObj);
    expect(x).toEqual(correctOutput);
  });
});

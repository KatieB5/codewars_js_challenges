const countBits = require("../challenges/bitCounting");

describe("countBits", () => {
  test("it throws an error if not passed integers", () => {
    expect(() => {
      countBits();
    }).toThrow("n is required");

    expect(() => {
      countBits(["3", "7", "11", "17"]);
    }).toThrow("a number is required");

    expect(() => {
      countBits("87");
    }).toThrow("a number is required");
  });

  test("takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number", () => {
    const actual = countBits(0);
    expect(actual).toBe(0);

    const actual1 = countBits(4);
    expect(actual1).toBe(1);

    const actual2 = countBits(7);
    expect(actual2).toBe(3);

    const actual3 = countBits(9);
    expect(actual3).toBe(2);

    const actual4 = countBits(1234);
    expect(actual4).toBe(5);
  });
});
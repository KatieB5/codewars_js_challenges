const solution = require("../challenges/multiplesOf3and5");

describe("solution", () => {
    test("it throws an error if not passed an integer", () => {
        expect(() => {
            solution();
        }).toThrow("please provide an integer to run this function");

        expect(() => {
            solution("foo");
        }).toThrow("an integer is required to run this function");
    });

    test("the function returns the sum of all the multiples of 3 or 5 below the integer passed into it", () => {
        const actual = solution(10);
        expect(actual).toBe(23);

        const actual1 = solution(20);
        expect(actual1).toBe(78);
    });
});
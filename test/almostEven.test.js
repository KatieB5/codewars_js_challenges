const splitInteger = require("../challenges/almostEven");

describe("splitInteger", () => {
    test("the function returns an array of integers (n='parts') as even as possible, which sum to 'num'", () => {
        const actual = splitInteger(20, 5);
        expect(actual).toEqual([4,4,4,4,4]);

        const actual1 = splitInteger(2, 2);
        expect(actual1).toEqual([1,1]);

        const actual2 = splitInteger(10, 1);
        expect(actual2).toEqual([10]);

        const actual3 = splitInteger(35, 3);
        expect(actual3).toEqual([11,12,12]);

        const actual4 = splitInteger(95, 14);
        expect(actual4).toEqual([6,6,6,7,7,7,7,7,7,7,7,7,7,7]);
    });
});
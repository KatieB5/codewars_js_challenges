const twosDifference = require("../challenges/differenceOf2");

describe("twosDifference", () => {
    test("the function returns all pairs of integers from a given collection of integers that have a difference of 2 sorted in ascending order", () => {
        const actual = twosDifference([1, 2, 3, 4]);
        expect(actual).toEqual([[1, 3], [2, 4]]);

        const actual1 = twosDifference([4, 1, 2, 3]);
        expect(actual1).toEqual([[1, 3], [2, 4]]);

        const actual2 = twosDifference([1, 23, 3, 4, 7]);
        expect(actual2).toEqual([[1, 3]]);

        const actual3 = twosDifference([4, 3, 1, 5, 6]);
        expect(actual3).toEqual([[1, 3], [3, 5], [4, 6]]);

        const actual4 = twosDifference([1, 3, 4, 6]);
        expect(actual4).toEqual([[1, 3], [4, 6]]);
    });
});
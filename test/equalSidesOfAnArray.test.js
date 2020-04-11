const findEvenIndex = require("../challenges/equalSidesOfAnArray");

describe("findEvenIndex", () => {
    test("throws an error if input is undefined", () => {
        expect( () => {
            findEvenIndex();
        }).toThrow("Input is undefined. Please provide an array of integers");
    });

    test("returns the index position 'N' where the sum of the integers to the left of N is equal to the sum of the integers to the right of N", () => {
        const actual = findEvenIndex([1,2,3,4,3,2,1]);
        expect(actual).toBe(3);
    });

    test("function works with negative integers", () => {
        const actual = findEvenIndex([1,100,50,-51,1,1]);
        expect(actual).toBe(1);

        const actual1 = findEvenIndex([20,10,-80,10,10,15,35]);
        expect(actual1).toBe(0);
    });
});
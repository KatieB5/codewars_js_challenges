const sequenceClassifier = require("../challenges/sequenceClassifier");

describe("sequenceClassifier", () => {
    test("the function throws an error if not passed an input", () => {
        expect( () => {
            sequenceClassifier();
        }).toThrow("Input is undefined. Please provide an array of integers")
    });

    test("the function correctly classifies an array as 'unordered' i.e. 0", () => {
        const actual = sequenceClassifier([3,5,8,1,14,3]);
        expect(actual).toBe(0);
    });

    test("the function correctly classifies an array as 'strictly increasing' i.e. 1", () => {
        const actual = sequenceClassifier([3,5,8,9,14,23]);
        expect(actual).toBe(1);

        const actual1 = sequenceClassifier([8,9]);
        expect(actual1).toBe(1)
    });

    test("the function correctly classifies an array as 'not decreasing' i.e. 2", () => {
        const actual = sequenceClassifier([3,5,8,8,14,14]);
        expect(actual).toBe(2);

        const actual1 = sequenceClassifier([8,8,8,8,8,9]);
        expect(actual1).toBe(2);
    });

    test("the function correctly classifies an array as 'strictly decreasing' i.e. 3", () => {
        const actual = sequenceClassifier([14,9,8,5,3,1]);
        expect(actual).toBe(3);

        const actual1 = sequenceClassifier([9,8]);
        expect(actual1).toBe(3);
    });

    test("the function correctly classifies an array as 'not increasing' i.e. 4", () => {
        const actual = sequenceClassifier([14,14,8,8,5,3]);
        expect(actual).toBe(4);

        const actual1 = sequenceClassifier([9,9,9,8,8,8]);
        expect(actual1).toBe(4)
    });

    test("the function correctly classifies an array as 'constant' i.e. 5", () => {
        const actual = sequenceClassifier([8,8,8,8,8,8]);
        expect(actual).toBe(5);
    });
});
const geometricSequenceElements = require("../challenges/geometricProgressionSequence");

describe("geometricSequenceElements", () => {
    test("it throws an error if not passed 3 integers", () => {
        expect(() => {
            geometricSequenceElements(2, 3);
        }).toThrow("3 integers are required to run this function");

        expect(() => {
            geometricSequenceElements(["3", "7", "11"]);
        }).toThrow("3 integers are required to run this function");

        expect(() => {
            geometricSequenceElements("8, 3, 9");
        }).toThrow("3 integers are required to run this function");

        expect(() => {
            geometricSequenceElements(8, 3, "9");
        }).toThrow("all arguments passed into this function must be integers");
    });

    test("function should return a sequence of numbers as a string, with ', ' separating each integer", () => {
        const actual = geometricSequenceElements(2, 3, 5);
        expect(actual).toBe('2, 6, 18, 54, 162');

        const actual1 = geometricSequenceElements(2, 2, 10);
        expect(actual1).toBe('2, 4, 8, 16, 32, 64, 128, 256, 512, 1024');
    });

    test("function that will print first 'n' elements of the sequence with the given constant 'r' and first element 'a'", () => {
        const actual = geometricSequenceElements(2, 5, 9);
        expect(actual).toBe('2, 10, 50, 250, 1250, 6250, 31250, 156250, 781250');

        const actual1 = geometricSequenceElements(2, 2, 10);
        expect(actual1).toBe('2, 4, 8, 16, 32, 64, 128, 256, 512, 1024');
    });

    test("function works with negative integers", () => {
        const actual2 = geometricSequenceElements(1, -2, 10);
        expect(actual2).toBe('1, -2, 4, -8, 16, -32, 64, -128, 256, -512');

        const actual3 = geometricSequenceElements(-6, 6, 9);
        expect(actual3).toBe('-6, -36, -216, -1296, -7776, -46656, -279936, -1679616, -10077696');

        const actual4 = geometricSequenceElements(-7, 2, 4);
        expect(actual4).toBe('-7, -14, -28, -56');
    });
});
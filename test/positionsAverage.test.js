const posAverage = require("../challenges/positionsAverage");

describe("posAverage", () => {
    test("throws an error if input is undefined", () => {
        expect( () => {
            posAverage();
        }).toThrow("Input is undefined. Please provide a string");
    });

    test("provides the average number of positions across the total number of substrings where the values match at a given index", () => {
        const actual = posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096");
        expect(actual).toBe("26.6666666667");

        const actual1 = posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490");
        expect(actual1).toBe("29.2592592593");
    });

});
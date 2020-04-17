const greatestProduct = require("../challenges/greatestProduct");

describe("greatestProduct", () => {
    test("throws an error if the input is undefined", () => {
        expect( () => {
            greatestProduct();
        }).toThrow("Input is undefined. Please provide a string");
    });

    test("function returns the greatest product of five consecutive digits in the input string", () => {
        const actual = greatestProduct("123834539327238239583");
        expect(actual).toBe(3240);

        const actual1 = greatestProduct("92494737828244222221111111532909999");
        expect(actual1).toBe(5292);

        const actual2 = greatestProduct("02494037820244202221011110532909999");
        expect(actual2).toBe(0);
    });
});
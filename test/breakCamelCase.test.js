const breakCamelCase = require("../challenges/breakCamelCase");

describe("breakCamelCase", () => {
    test("throws an error if input is undefined", () => {
        expect( () => {
            breakCamelCase();
        }).toThrow("Input is undefined. Please provide a string");
    });

    test("throws an error if input is not a string", () => {
        expect( () => {
            breakCamelCase(0);
        }).toThrow("Input is not a string. Please enter a string as input");
    });

    test("returns spaces between words that start with a capital letter", () => {
        const actual = breakCamelCase("winnieThePooh");
        expect(actual).toBe("winnie The Pooh");

        const actual1 = breakCamelCase("thereIsMoreThanOneCamelType");
        expect(actual1).toBe("there Is More Than One Camel Type");
    })
})
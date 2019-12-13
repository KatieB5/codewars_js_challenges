const pigIt = require("../challenges/pigIt");

describe("pigIt", () => {
    test("it throws an error if not passed a string", () => {
        expect(() => {
            pigIt();
        }).toThrow("please provide an input to run this function");

        expect(() => {
            pigIt(["i am going on holiday"]);
        }).toThrow("a string is required to run this function");

        expect(() => {
            pigIt(90);
        }).toThrow("a string is required to run this function");
    });

    test("it should move the first letter of each word to the end of the word, then add 'ay' to the end of the word", () => {
        const actual = pigIt("Pig latin is cool");
        expect(actual).toBe("igPay atinlay siay oolcay");
    });

    test("it should leave punctuation marks untouched", () => {
        const actual = pigIt("Hello world !");
        expect(actual).toBe("elloHay orldway !");
    });
})
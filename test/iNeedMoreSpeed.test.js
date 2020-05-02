const reverse = require("../challenges/iNeedMoreSpeed");

describe("reverse", () => {
    test("function returns the input array of numbers reversed in place", () => {
        const actual = reverse([1,2,3,4,5]);
        expect(actual).toEqual([5,4,3,2,1]);
    });

    test("function returns the input array of words reversed in place", () => {
        const actual = reverse(['hello','world','how','are','you','?']);
        expect(actual).toEqual(['?','you','are','how','world','hello']);
    });
});
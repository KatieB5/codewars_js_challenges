function solution(number) {
    if (number === undefined) throw new Error("please provide an integer to run this function");
    if (!Number.isInteger(number)) throw new Error("an integer is required to run this function");
    let sum = 0;
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

module.exports = solution;
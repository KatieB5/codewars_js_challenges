function geometricSequenceElements(a, r, n) {
    if (a === undefined || r === undefined || n === undefined) throw new Error("3 integers are required to run this function");
    if (!Number.isInteger(a) || !Number.isInteger(r) || !Number.isInteger(n)) throw new Error("all arguments passed into this function must be integers");

    let finalSequence = [];
    for (let i = 0; i < (n); i++) {
        finalSequence.push(a * Math.pow(r, i))
    }
    return finalSequence.join(', ');
}

module.exports = geometricSequenceElements;
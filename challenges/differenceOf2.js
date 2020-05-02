function twosDifference(input) {

    let pairsArr = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = (i + 1); j < input.length; j++) {
            if (input[j] - input[i] === 2) {
                pairsArr.push([input[i], input[j]]);
            }
            if (input[i] - input[j] === 2) {
                pairsArr.push([input[j], input[i]]);
            }
        }
    }
    return pairsArr.sort();
}

module.exports = twosDifference;
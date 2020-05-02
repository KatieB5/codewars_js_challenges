let splitInteger = function (num, parts) {
    
    let numArr = [];
    let remainder = num % parts;

    if (remainder === 0) {
        let equalPart = num / parts;
        for (let i = 0; i < parts; i++) {
            numArr.push(equalPart);
        }
    }

    if (remainder !== 0) {

        for (let i = 0; i < (parts - remainder); i++) {
            numArr.push((num - remainder) / parts);
        }

        for (let i = 0; i < (remainder); i++) {
            numArr.push(((num - remainder) / parts) + (parts / parts));
        }
    }
    return numArr;
}

module.exports = splitInteger;
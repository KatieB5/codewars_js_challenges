function reverse(arr) {
    for (let i = 0; i <= (arr.length - 1) / 2; i++) {
        let num = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = num;
    }
    return arr;
}

module.exports = reverse;
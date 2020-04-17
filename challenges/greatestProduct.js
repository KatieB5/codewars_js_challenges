function greatestProduct(input) {

    if (input === undefined) throw new Error("Input is undefined. Please provide a string");

    let numsArr = input.split('');
  
    let biggestSum = 0;
  
    for (let i = 0; i < numsArr.length - 4; i++) {
      let runningSum = parseInt(numsArr[i]) * parseInt(numsArr[i + 1]) * parseInt(numsArr[i + 2]) * parseInt(numsArr[i + 3]) * parseInt(numsArr[i + 4]);
  
      if (runningSum > biggestSum) {
        biggestSum = runningSum;
      }
    }
  
    return biggestSum;
  
}

module.exports = greatestProduct;
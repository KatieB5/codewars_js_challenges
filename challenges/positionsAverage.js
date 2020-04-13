function posAverage(s) {

    if (s === undefined) throw new Error("Input is undefined. Please provide a string");

    let subStringsArr = s.split(', ');
   
    let totalNumOfPos = (((subStringsArr.length * (subStringsArr.length - 1)) / 2) * subStringsArr[0].length);
  
    let numOfMatches = 0;
      
    for (let i = 0; i < subStringsArr.length; i++) {
      for (let j = i + 1; j < subStringsArr.length; j++) {
        for (let k = 0; k < subStringsArr[i].length; k++) {
          if (subStringsArr[i][k] === subStringsArr[j][k]) numOfMatches++
        }
      }
    }
  
    return ((numOfMatches / totalNumOfPos) * 100).toFixed(10);
  
}

module.exports = posAverage;

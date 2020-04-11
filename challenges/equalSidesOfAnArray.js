function findEvenIndex(arr) {
    if (arr === undefined) throw new Error("Input is undefined. Please provide an array of integers");
      
    for (let i = 0; i < arr.length; i++) { 
      let leftSideSum = 0;
      let rightSideSum = 0;
  
      let leftArr = arr.slice(0, i);
      let rightArr = arr.slice((i + 1), arr.length);
      let indexPos = i;
      
      console.log(leftArr);
      console.log(rightArr);
      
      for (let i = 0; i < leftArr.length; i++) {
        leftSideSum += leftArr[i];
      }
      
      for (let i = 0; i < rightArr.length; i++) {
        rightSideSum += rightArr[i];
      }
  
      console.log(leftSideSum);
      console.log(rightSideSum);
  
      if (leftSideSum === rightSideSum) {
        return indexPos;
      }
  
    }
  
    return -1;
  
  }

module.exports = findEvenIndex;
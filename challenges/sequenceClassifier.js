function sequenceClassifier(arr) {

    if (arr === undefined) throw new Error("Input is undefined. Please provide an array of integers");

    let decreaseCount = 0;
    let increaseCount = 0;
    let constCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        decreaseCount++;
      } else if (arr[i + 1] > arr[i]) {
        increaseCount++;
      } else if (arr[i + 1] === arr[i]) {
        constCount++;
      }
    } 
  
    if (decreaseCount === 0 && increaseCount === 0 && constCount > 0) { 
      return 5;
    } else if (decreaseCount > 0 && increaseCount === 0 && constCount > 0) { 
      return 4;
    } else if (decreaseCount > 0 && increaseCount === 0 && constCount === 0) { 
      return 3;
    } else if (decreaseCount === 0 && increaseCount > 0 && constCount > 0) { 
      return 2;
    } else if (decreaseCount === 0 && increaseCount > 0 && constCount === 0) { 
      return 1;
    } else if (decreaseCount > 0 && increaseCount > 0 && constCount === 0) { 
      return 0;
    } else if (decreaseCount > 0 && increaseCount > 0 && constCount > 0) { 
      return 0;
    }
  }

  module.exports = sequenceClassifier;
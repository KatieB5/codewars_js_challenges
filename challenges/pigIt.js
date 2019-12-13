function pigIt(str){
    if (str === undefined) throw new Error("please provide an input to run this function");
    if (typeof str !== 'string') throw new Error("a string is required to run this function");
    let indWordArr = str.split(' ');
    for(let i = 0; i < indWordArr.length; i++){
      if (/[a-zA-Z]/.test(indWordArr[i])) {
        indWordArr[i] = indWordArr[i].slice(1) + indWordArr[i][0] + 'ay';
      }
    }
    return indWordArr.join(' ');
  }

module.exports = pigIt;
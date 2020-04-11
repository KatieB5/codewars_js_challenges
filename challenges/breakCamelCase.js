function breakCamelCase(string) {

    if (string === undefined) throw new Error("Input is undefined. Please provide a string");
    
    if (string ==! typeof "") throw new Error("Input is not a string. Please enter a string as input");
    
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === string.charAt(i).toUpperCase()) {
          let arr = string.split(/(?=[A-Z])/);
          return(arr.join(' '));
        }
    }
    
}

module.exports = breakCamelCase;
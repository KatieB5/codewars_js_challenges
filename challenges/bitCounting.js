const countBits = function (n) {
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n)) throw new Error("a number is required");

  let binary = n.toString(2);
  let oneCount = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      oneCount++;
    }
  }
  return oneCount;
};

module.exports = countBits;
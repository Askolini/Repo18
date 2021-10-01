let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];

let newSet = new Set(numberArray);

let uniqueArray = [...newSet];
uniqueArray.sort((a, b) => a - b);

console.log(uniqueArray);

module.exports = { numberArray, uniqueArray };
const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8]];
const flatArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArray); //[, 2, 3, 4, 5, 6, 7, 8]

//using Flat() function

const nestedArray1 = [[1, 2, 3], [4, 5], [6, 7, 8]];
const flatArray1 = nestedArray.flat();
console.log(flatArray1); //[, 2, 3, 4, 5, 6, 7, 8]
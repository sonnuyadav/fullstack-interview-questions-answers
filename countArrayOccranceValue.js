const countOccurrences = (arr) => arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});

//const inputArray = [1, 2, 2, 3, 4, 4, 4, 5];
const inputArray = ["sonu", "ramesh", "sonu", "Monu", 'ramesh'];
const result = countOccurrences(inputArray);
console.log(result); // { sonu: 2, ramesh: 2, Monu: 1 }
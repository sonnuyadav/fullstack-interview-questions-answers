function customFilter(array, filterFunc) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (filterFunc(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];

// Filter out even numbers
const evenNumbers = customFilter(numbers, num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// Filter out numbers greater than 3
const numbersGreaterThanThree = customFilter(numbers, num => num > 3);
console.log(numbersGreaterThanThree); // Output: [4, 5, 6]

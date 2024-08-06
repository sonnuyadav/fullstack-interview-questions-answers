function secondLargestString(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let largest = '';
    let secondLargest = '';

    for (const str of arr) {
        if (str.length > largest.length) {
            secondLargest = largest;
            largest = str;
        } else if (str.length > secondLargest.length && str.length < largest.length) {
            secondLargest = str;
        }
    }

    return secondLargest.length > 0 ? secondLargest : null;
}

// Example usage:
const strings = ["short", "mediumq", "longest", "tiny", "larger"];
const secondLargest = secondLargestString(strings);
console.log(secondLargest); // "larger"

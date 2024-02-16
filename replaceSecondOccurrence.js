function replaceSecondOccurrence(str) {
    // Find the index of the first occurrence of 'e'
    const firstIndex = str.indexOf('e');

    if (firstIndex === -1) {
        // If 'e' is not found, return the original string
        return str;
    }

    // Find the index of the second occurrence of 'e'
    const secondIndex = str.indexOf('e', firstIndex + 1);
    if (secondIndex === -1) {
       return str;
    }
  
    const replacedString = str.slice(0, secondIndex) + '@' + str.slice(secondIndex + 1);
    return replacedString;
}

const inputString = 'example';
console.log("Modified string:", replaceSecondOccurrence(inputString)); // Output: "exampl@"

function findDuplicateCharacters(str) {
    // Create an object to store the count of each character
    const charCount = {};
    for (let char of str) {
        // If the character is already in charCount, increment its count
        // Otherwise, initialize its count to 1
        charCount[char] = (charCount[char] || 0) + 1;
    }

    const duplicates = [];
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicates.push(char);
        }
    }

    return duplicates;
}

const str = "hello";
console.log("Duplicate characters:", findDuplicateCharacters(str)); // Output: ["l"]

function longestConsecutiveSequence(arr) {
    if (arr.length === 0) {
        return 0;
    }
    arr.sort((a, b) => a - b);
    let longestSequence = 1;
    let currentSequence = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            currentSequence++;
        } else if (arr[i] !== arr[i - 1]) {
            currentSequence = 1;
        }
       longestSequence = Math.max(longestSequence, currentSequence);
    }

    return longestSequence;
}

const arr = [100, 4, 200, 1, 3, 2,5];
console.log("Longest consecutive sequence length:", longestConsecutiveSequence(arr)); // Output: 4


const longestWord = (sentence) => sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');

const inputSentence = 'This is a animal';
console.log(longestWord(inputSentence));
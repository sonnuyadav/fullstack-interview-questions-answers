
const areBracketsBalanced = (str) => !str.split('').reduce((count, char) => (char === '(' || char === '[' || char === '{') ? ++count : (char === ')' || char === ']' || char === '}') ? --count : count, 0);

const s1 = '({[]}{})';
const r1 = areBracketsBalanced(s1); // r1: true
console.log(r1);
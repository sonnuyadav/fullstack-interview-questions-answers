const method1= []; for (let i = 0; i < 100; i++) { method1.push(i); }
console.log(method1); // 0 to 99 number

const method2 = Array.from({ length: 100 }, (_, i) => i);

console.log(method2); // 0 to 99 number

//using spread operator
const method3 = [...Array(100)].map((_, i) => i);

console.log(method3); // 0 to 99 number


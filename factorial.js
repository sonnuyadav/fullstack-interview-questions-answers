const number = 5;
//using Recursive Approach
function factorialRecursive(n){
    if (n === 0 || n === 1){
        return 1;
    }else{
        return n * factorialRecursive(n - 1);
    }
}

console.log(factorialRecursive(number));

const factorial = (n) => n === 0 ? 1 : Array.from({length: n}, (_, i) => i + 1).reduce((acc, num) => acc * num, 1);
console.log(factorial(number));






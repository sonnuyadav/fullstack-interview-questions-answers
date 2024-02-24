const numbers = [2,6,9,3,4,10,1];

const doubledNumbers = numbers.map(num => {
    if (num > 5) {
        return num * 2;
    } else {
        return num;
    }
});

console.log(doubledNumbers); //[2,12,18,3,4,20,1]
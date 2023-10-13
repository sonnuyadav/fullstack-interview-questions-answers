//apple  => aelpp
const getChar = (str) => {
    return str.split("").sort().join("");
}

console.log(getChar("apple"));
//Q. How to check if an object is an array or not.
function checkArr(item){
  return Array.isArray(item);
}

console.log(checkArr([])); //true
console.log(checkArr({})); //false
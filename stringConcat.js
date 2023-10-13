const arr = [1,2,3,4,5];

const dupCatArray = (arrVal) =>{
       return arrVal.concat(arrVal);
}

console.log(dupCatArray(arr));
var arr = [1,3,3,3,1,5,6,7,8,1];

const removeDuplicate = (arr) =>{
    var exists ={},
      outArr = [], 
      elm;

  for(let i =0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  return outArr;
}

console.log(removeDuplicate(arr));

//Another way with ES6
const filteredArray = arr.filter((value, index, array) => 
  array.indexOf(value) === index
);

console.log(filteredArray); // [ 1, 3, 5, 6, 7, 8 ]
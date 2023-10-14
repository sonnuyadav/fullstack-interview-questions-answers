const arrUnion = (arr1, arr2) =>{
 return [... new Set(arr1.concat(arr2))];
}

console.log(arrUnion([1,2,3,4,5,6], [2,3,4,5,67,8])); //[1, 2,  3, 4,5, 6, 67, 8]
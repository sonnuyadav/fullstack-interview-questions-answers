//Recursive Approach
function flattenArray(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // If the element is an array, recursively flatten it
        result = result.concat(flattenArray(arr[i]));
      } else {
        // If the element is not an array, add it to the result
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  const nestedArrays = [[1, 2, [3]], [4, [5, 6]], [7, 8]];
  
  const flatArray = flattenArray(nestedArrays);
  
  console.log(flatArray);
  // Output: [1, 2, 3, 4, 5, 6, 7, 8]



  //Using flat() Method

  const nestedArrays1 = [[1, 2, [3]], [4, [5, 6]], [7, 8]];

// Using flat with Infinity to recursively flatten all nested arrays
const flatArray1 = nestedArrays.flat(Infinity);

console.log(flatArray1);
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

//Using reduce method
 const flatArrayReduce = nestedArrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(Array.isArray(currentArray) ? flattenArray(currentArray) : currentArray);
}, []);

console.log(flatArrayReduce);
const arr = [2,3,4,5,6,3,2,1,2,3,4,5,5,6,7];

//using filter
function removeDuplicates(arr){
 return arr.filter((items, index) => arr.indexOf(items) === index);
}

console.log(removeDuplicates(arr));

//using forEach

function removeDuplicatesUsingForeach(arr) { 
    let unique = []; 
    arr.forEach(element => { 
        if (!unique.includes(element)) { 
            unique.push(element); 
        } 
    }); 
    return unique; 
} 
console.log(removeDuplicatesUsingForeach(arr));

//using reduce method
function removeDuplicatesUsingReduce(arr) { 
    let unique = arr.reduce(function (acc, curr) { 
        if (!acc.includes(curr)) 
            acc.push(curr); 
        return acc; 
    }, []); 
    return unique; 
} 
console.log(removeDuplicatesUsingReduce(arr));

//using forLoop
function removeDuplicatesUsingForLoop(arr) { 
    let unique = []; 
    for (i = 0; i < arr.length; i++) { 
        if (unique.indexOf(arr[i]) === -1) { 
            unique.push(arr[i]); 
        } 
    } 
    return unique; 
} 
console.log(removeDuplicatesUsingForLoop(arr));
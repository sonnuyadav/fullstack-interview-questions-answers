   
function findMajority(arr)  
{ 
    const n = arr.length; 
    for (let i = 0; i < n; i++) { 
        let count = 0; 
        for (let j = 0; j < n; j++)  
        { 
            if (arr[i] === arr[j]) { 
                count++; 
            } 
        } 
        if (count > n / 2)  
        { 
            return arr[i]; 
        } 
    } 
    return null; 
} 
const arr1 = [2, 2, 3, 4, 2, 2, 5]; 
console.log(findMajority(arr1)); // 2
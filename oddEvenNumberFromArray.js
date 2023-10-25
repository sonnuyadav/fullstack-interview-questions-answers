function getArrayPushValueInNewArray(arr){
    const evenArray = [];
    const oddArray  = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0 ){
            evenArray.push(arr[i]);
        }else{
            oddArray.push(arr[i]);
        }  
    }
    return {
        evenArray,
        oddArray
    }
   
}

const arr = [2,3,4,5,6,7,8,9];

console.log(getArrayPushValueInNewArray(arr));
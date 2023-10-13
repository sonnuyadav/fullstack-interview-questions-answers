const arr = [1,2,3,4,5,6];

const retriveValue = (arr, n=1)=>{
   if(n < arr.length){
    for (let i = 0; i < n; i++) {
        console.log(arr[i])
        
    }
  }else{
    console.log(`${n} elements have not in the given array`);
  }
}

retriveValue(arr,13);

//retrive value from last position of array

const retriveValueFromLast = (arr, n=1)=>{
    if(n < arr.length){
     for (let i = 0; i < n; i++) {
         console.log(arr[arr.length - 1 - i])
         
     }
   }else{
     console.log(`${n} elements have not in the given array`);
   }
 }
 
 retriveValueFromLast(arr,1);
const arr =[5,2,2,3,5,6,3,7];

const nonDuplicate = (arr) =>{
var sortedArray = arr.slice().sort(); 
var nonDuplicates = [];
var duplicates=[];
for (var i = 0; i < arr.length; i++) {
    if (sortedArray[i + 1] == sortedArray[i]) {
        duplicates.push(sortedArray[i]);
    }else{
        if(!duplicates.includes(sortedArray[i])){
        nonDuplicates.push(sortedArray[i]);
      }
    }
}
return nonDuplicates;
}

console.log(nonDuplicate(arr)); //[ 6, 7 ]
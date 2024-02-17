let arr = [1,2,3,4,5,6,7,8,10];

const findMissingNum = (arr) => {
  //arr.sort(); //if array is unsorted
  for(var i = 0; i < arr.length - 1; i++) {
    if(arr[i] + 1 != arr[i+1] ) {
      return arr[i] + 1;
    }
  }
  
  return false;
}
console.log(findMissingNum(arr)); //9

//#2 another way

function findMissingNumber(arr) {
  const n = arr.length + 1; // Including the missing number
  const expectedSum = (n * (n + 1)) / 2;
  // Calculate the sum of the given array
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  // The missing number is the difference between the expected sum and the actual sum
  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}
const numbers = [1, 2, 3, 4, 6]; // 5 is missing
console.log("Missing number:", findMissingNumber(numbers));
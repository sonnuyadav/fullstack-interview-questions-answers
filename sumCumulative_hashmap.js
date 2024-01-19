let arr = [1,3,5,7];
const cumulativeSum = list => {
  let result = [list[0]];
  
  for(let i = 1; i < list.length; i++) {
    result.push(list[i] + result[i-1]);
  } 
  
  return result;
}
console.log(cumulativeSum(arr)); // Returns [1, 4, 9, 16]



//Hashmap count index of elements 
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers.indexOf(numbers[i]), numbers.lastIndexOf(numbers[j])];
      }
    }
  }
}

console.log(twoSum([1, 2, 3], 5)); // [1, 2]

//-----------------OR----------------------------------------------------
var anotherTwoSum = function(nums, target) {
  let hashMap =  new Map();

  for(let i = 0; i < nums.length; i++){
      let remaining = target - nums[i];

      if(hashMap.has(remaining)){
          return [i, hashMap.get(remaining)];
      }
      hashMap.set(nums[i], i);
  }

};

console.log(anotherTwoSum([1, 2, 3], 5)); // [1, 2]
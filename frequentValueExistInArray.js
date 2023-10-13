const arr = [1,2,3,4,4,5,5,6,6,77,5];

const getFrequentVal = (arr) => {
  var freq = {};

  arr.forEach(element => {
    if(freq.hasOwnProperty(element)) freq[element]++;
    else freq[element] =1;

});
 const getValue = Object.keys(freq).reduce(function(accumulator, currentValue){
    return freq[accumulator] > freq[currentValue] ? accumulator : currentValue;
 });
 
console.log(getValue);
}

console.log(getFrequentVal(arr));
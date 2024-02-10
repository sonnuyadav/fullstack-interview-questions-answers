function mul(x) {
    return function (y) {
      return function (z) {
        return x * y * z;
      };
    };
  }

// console.log(mul(2)(3)(5));	// 30 
// console.log(mul(2)(3)(4)); 	// 24

//Infinite Currying in JavaScript
let sum = function (a){
  return function(b){
    if(b){
      return sum(a + b);
    }
    return a;
  }
}
console.log(sum(1)(2)(3)(4)(5)(6)());  //21

const sumArrow = a => b => b ? sumArrow(a + b): a;
console.log(sumArrow(1)(2)(3)(4)(5)(6)()); //21












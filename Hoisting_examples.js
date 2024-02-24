//#1
console.log(hoist)
var hoist = "value1"; //undefined

//#2
var hoist
console.log(hoist);
hoist = "value"; //undefined 

//#3
myFunction() // No error; logs "hello"
function myFunction() {
  console.log("hello")
}

//#4
myFunction() // Error: `myFunction` is not a function
var myFunction = function() {
  console.log("hello")
}

//------------Good to hear ---------------
//Hoisting is JavaScript’s default behavior of moving declarations to the top
//Functions declarations are hoisted before variable declarations
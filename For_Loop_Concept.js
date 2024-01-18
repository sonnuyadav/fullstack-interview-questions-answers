// var array = [1, 2, 3, 4, 5];
// for(var i = 0; i < array.length; i++) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 1000);
// }
// //output 5 times undefined
// //Note: Due to the closure of JavaScript, the console.log has access to the i =5 which is defined as an outer layer of the setTimeout

// for(var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000);
// }
// //print 5 times
// for (var i = 0; i < 5; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i)
//         }, 1000);
//     })(i);
// }

// // output: 0,1,2,3,4
// for(let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i)
//     }, 1000);
//   }

//output: 0,1,2,3,4


console.log("1")

setTimeout(function() {
 console.log("2")
}, 0)

console.log("3")
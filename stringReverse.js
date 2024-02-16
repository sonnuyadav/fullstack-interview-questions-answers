//Q. reverse a string by words. Also show the reverse of each words in place
//#1:
const str = "Hello How Are You";
//const str = "JavaScript is awesome";
const reversedStr = str.split(" ")
           .map((word)=>{
            return word.split("").reverse().join(""); //join("") used for result in string format
         });

console.log(reversedStr.join(" ")); //olleH woH erA uoY

//#2: Write a program to reverse a string

let reversedString = "";
for (let i = 0; i < str.length; i++) {
  reversedString = str.charAt(i) + reversedString;
}
 
console.log(reversedString); //uoY erA woH olleH
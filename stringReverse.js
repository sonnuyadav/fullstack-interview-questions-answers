//Q. Give a string, reverse each word in the sentence.
const str = "Hello How Are You";
const reversedStr = str.split(" ")
           .map((word)=>{
            return word.split("").reverse().join(""); //join("") used for result in string format
         });

console.log(reversedStr.join(" ")); //olleH woH erA uoY
function reverseString(str){
    if(str === ""){
        return "";
    }else{
        return reverseString(str.substr(1)) + str.charAt(0);
        // here calling recursively itself with substring starting from second character
        //until the base case is reached.
    }
}

const tempString = "abc";
const reversedString = reverseString(tempString);
console.log(reversedString);
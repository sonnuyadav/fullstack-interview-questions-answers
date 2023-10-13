const reverseNum = (num)=>{
   return Number(num.toString().split("").reverse().join("")); //one line
}

console.log(reverseNum(12));

//using loop
const reverseNumUsingLoop = (num) =>{
    let rev = 0;
    while(num > 0){
        let reminder = num % 10;
        rev = rev * 10 + reminder;
        num = Math.floor(num/10);
    }
    return rev;
}

console.log(reverseNumUsingLoop(123));
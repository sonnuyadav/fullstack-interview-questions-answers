const arr = ["Abc", 2, "BCA", 4, "MCA", 5];
var sum = 0;
arr.forEach((elem) =>{
    
    if(typeof elem === 'number'){
        sum = sum + elem;
    }
});

console.log(sum); //11
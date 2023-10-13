const arr = [
    {name: "Sonu", gender:"male"},
    {name: "Rohani", gender:"female"},
    {name: "Sumit", gender:"nonspecified"},
    {name: "karan", gender:"male"},
    {name: "kabita", gender:"female"}
];

const getFilterData = arr.filter((item) => item.gender !== "male");

console.log(getFilterData); //[{ name: 'Rohani', gender: 'female' },{ name: 'Sumit', gender: 'nonspecified' },{ name: 'kabita', gender: 'female' }]


//Q. check how much people are male
var count = 0;
arr.forEach(function(element){
    if(element.gender !== 'male') count ++;
});

console.log(count);

//remove non male from array

for(var i = 1; i <= count; i++){
    for(var j = 0; j< arr.length; j++){
        if(arr[j].gender !== 'male'){
            arr.splice(j, 1);
        }
    }
}

console.log("=>",arr); //  [ { name: 'Sonu', gender: 'male' }, { name: 'karan', gender: 'male' } ]
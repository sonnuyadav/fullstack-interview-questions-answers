const arr = [
    {name: "Sonu", gender:"male"},
    {name: "Rohani", gender:"female"},
    {name: "Sumit", gender:"nonspecified"},
    {name: "karan", gender:"male"},
    {name: "kabita", gender:"female"}
];

const getFilterData = arr.filter((item) => item.gender !== "male");

console.log(getFilterData); //[{ name: 'Rohani', gender: 'female' },{ name: 'Sumit', gender: 'nonspecified' },{ name: 'kabita', gender: 'female' }]
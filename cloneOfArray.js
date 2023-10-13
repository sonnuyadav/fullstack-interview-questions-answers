const arr = [1,2,3,4,5,6];

const cloneArr = (arr) => [...arr]; //spread operator

console.log(cloneArr(arr));

//using map function
const useOfMap = (arr)=>{
   return arr.map((e)=> e);
};

console.log(useOfMap(arr));

//Another way forEach
const anotherWay = (arr)=>{
    const tempArr = [];
    arr.forEach((elem)=>{
        tempArr.push(elem);
    });
    return tempArr;
};

console.log(anotherWay(arr)); // [ 1, 2, 3, 4, 5, 6 ]


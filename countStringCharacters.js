const charOcc = (str) =>{
    var objOccrences = {};
    str.split("").forEach(element => {
        if(objOccrences.hasOwnProperty(element) === false){
            objOccrences[element] = 1;
        }else{
            objOccrences[element] ++;
        }
    });
    return objOccrences;
}
const tempStr = 'Hello World';
console.log(charOcc(tempStr));

// using for of loop
const string = "Hello World";
const obj = {};
for(let x of string){
    if(obj[x]){
        obj[x] +=1;
    }else{
        obj[x] = 1;
    }
}

console.log(obj);

//Output: { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }
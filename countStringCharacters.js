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
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
const tempStr = 'Geeta';

console.log(charOcc(tempStr));
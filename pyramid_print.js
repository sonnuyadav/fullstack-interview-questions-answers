function createPyramid(num){
  for(let i= 1; i<= num; i++){
    let row ='';
    for(let j=1; j<=num - i; j++){
      row += ' ';
    }

    for(let k=1; k<=2 * i -1; k++){
      row +=i
    }
  console.log(row)
  }
}

createPyramid(5);
//output:
// 1
// 222
// 33333
// 4444444
// 555555555
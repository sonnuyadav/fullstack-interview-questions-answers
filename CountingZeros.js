function countZero(n){
    var count = 0;
    while(n>0){
     count += Math.floor(n/10);
     n = n/10;
    }
    return count;
  }

  console.log(countZero(30)); // 3

  //means found first on 10, 20, 30 = 3 zero
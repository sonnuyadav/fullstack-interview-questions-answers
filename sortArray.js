const arr = [0,0,0,1,2,1];

//console.log(arr.sort());

function getSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }

  getSort(arr);
  console.log(arr); //[ 0, 0, 0, 1, 1, 2 ]
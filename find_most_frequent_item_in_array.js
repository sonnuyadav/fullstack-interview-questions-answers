//Write a javascript program to find the most frequent item in an array
var mostFrequnet = null,mostFrequnetItem ;
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
arr1.sort();

for (var i=0;i<arr1.length;i++){ 

     var single = arr1[i]; 
     var total = (arr1.lastIndexOf(single)-arr1.indexOf(single))+1; 

     if(total > mostFrequnet) {

         mostFrequnetItem = arr1[i];
         mostFrequnet = total;
         i= arr1.lastIndexOf(single)+1;

    }
}

console.log(mostFrequnetItem + " ( "+mostFrequnet+" times )");

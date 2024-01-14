function nthlargest(array, highest) {
    array.sort();
    l=array.length;
    if(highest>l)
        return("undefined");
    else
        return(array[l-highest+1]);
}
console.log(nthlargest([23, 652, 43, 89, 23, 90, 99, 88], 2)); //99 

const shuffleArray = (arr) =>{
    var totalShuffleArea = arr.length;

    while(totalShuffleArea > 0){
        totalShuffleArea --;
        var indexToBeExchange = Math.floor(Math.random() * totalShuffleArea);
        //swap value here
        var tempNum = arr[totalShuffleArea];
        arr[totalShuffleArea] = arr[indexToBeExchange];
        arr[indexToBeExchange]; tempNum;
    }

    return arr;
}

console.log(shuffleArray([11,2,3,4,5,6]));
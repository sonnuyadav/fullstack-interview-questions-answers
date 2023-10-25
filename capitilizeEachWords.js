const temStr = "hi how are you";
const capitilizeEachWords = (str) => {
     var allWords = str.split(" ").map((word) =>{
        return word.charAt(0).toUpperCase() + word.substring(1)
    });

    return allWords.join(" ");
}

console.log(capitilizeEachWords(temStr)); //Hi How Are You

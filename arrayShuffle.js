const shuffleArray = (arr) =>{
    const newArray = arr.slice();
  
    for (let i = newArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
     [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
    return newArray;
  }
  
  // now you can see example
  const originalArray = [1, 2, 3, 4, 5];
  const shuffledArray = shuffleArray(originalArray);
  
  console.log("Original Array:", originalArray);
  console.log("Shuffled Array:", shuffledArray);
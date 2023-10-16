const randomNumberGeneratorInRange = (rangeStart, rangeEnd) => {
    return rangeStart + Math.round(Math.random() * (rangeEnd - rangeStart));
    
}

console.log(randomNumberGeneratorInRange(10, 50));
function fibonacciSequence(numTerms) {
    if (numTerms <= 0) {
      return [];
    } else if (numTerms === 1) {
      return [0];
    } else if (numTerms === 2) {
      return [0, 1];
    } else {
      let sequence = [0, 1];
  
      for (let i = 2; i < numTerms; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
  
      return sequence;
    }
  }
  
  // Example usage:
  const numTerms = 10;
  const result = fibonacciSequence(numTerms);
  console.log(result);
  
function findLargestInNestedArray(arr) {
    let largestElement = Number.NEGATIVE_INFINITY;
    function traverseArray(currentArray) {
      for (let i = 0; i < currentArray.length; i++) {
        const currentElement = currentArray[i];
        if (Array.isArray(currentElement)) {
          traverseArray(currentElement);
        } else {
          // Update the largestElement if the current element is greater
          if (currentElement > largestElement) {
            largestElement = currentElement;
          }
        }
      }
    }
  
    traverseArray(arr);
    return largestElement;
  }
  
  // Example usage:
  const nestedArray = [
    [1, 2, 3],
    [4, [5, 6], 7],
    [8, 9, 10]
  ];
  
  const largestElement = findLargestInNestedArray(nestedArray);
  console.log("The largest element in the nested array is:", largestElement); // 10
  
// Function which repeats first non-repeating character
function printNonrepeated(string) {
    // Calculating frequencies using object
    let freq = {};
    for (let i = 0; i < string.length; i++) {
      freq[string[i]] = (freq[string[i]] || 0) + 1;
    }
   
    // Traverse the string
    for (let i = 0; i < string.length; i++) {
      if (freq[string[i]] === 1) {
        console.log("First non-repeating character is " + string[i]);
        break;
      }
    }
  }
   
  // Driver code
  let str = "aabbccde";
  printNonrepeated(str);


  
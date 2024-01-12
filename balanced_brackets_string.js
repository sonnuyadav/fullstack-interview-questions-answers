var isValidParentheses = function(str) {
    const stack = [];
    const characters = { ')': '(', '}': '{', ']': '['};
   for (const char of str) {
      if (!characters[char]){
         stack.push(char); 
      } 
      else if (stack.pop() !== characters[char]){
          return false;
      } 
    }
    return stack.length === 0;
  };

  const validString = '({[]}{})';
  const inValidString = "}}{{";
  console.log(isValidParentheses(validString)); // Output: true
  
function isValidParentheses(s) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    
    for (let i = 0; i < s.length; i++) {
      const currentBracket = s[i];
      if (openingBrackets.includes(currentBracket)) {
        stack.push(currentBracket);
      } else if (closingBrackets.includes(currentBracket)) {
        const lastOpeningBracket = stack.pop();
        if (!lastOpeningBracket || 
            openingBrackets.indexOf(lastOpeningBracket) !== closingBrackets.indexOf(currentBracket)) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  
  const validString = '({[]}{})';
  const inValidString = "}}{{";
  console.log(isValidParentheses(validString)); // Output: true
  
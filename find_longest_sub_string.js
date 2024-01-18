function longestSubstring(s) {
    let longest = '';
    let current = '';
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const charIndex = current.indexOf(char);
  
      if (charIndex === -1) {
        // Character not in current substring, add it
        current += char;
      } else {
        // Character already in current substring, update current substring
        current = current.slice(charIndex + 1) + char;
      }
  
      // Update longest substring if needed
      if (current.length > longest.length) {
        longest = current;
      }
    }
  
    return longest;
  }
  
  const inputString = "abcabcbb";
  const result = longestSubstring(inputString);
  console.log(result);  // Output: "abc"
  
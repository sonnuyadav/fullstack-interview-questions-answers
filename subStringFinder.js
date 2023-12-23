function subStringFinder(str, subStr){
    var idx = 0,
        i = 0,
        j = 0,
        len = str.length,
        subLen = subStr.length;
  
        while (i < len) {
        i++;
        if(str[i] == subStr[j])
           j++;
        else
           j = 0;
        
        //check starting point or a match   
        if(j == 0)
          idx = i;
        else if (j == subLen)
          return idx;
    }
  
    return -1;
  }
  
 console.log("=======1=========================>",subStringFinder('abbcdabbbbbckabab', 'ab'));

 console.log("=======2=========================",subStringFinder('abbcdabbbbbck', 'bck'));

  //doesn't work for this one.
  console.log("=======3=========================",subStringFinder('abbcdabbbbbck', 'bbbck')); 
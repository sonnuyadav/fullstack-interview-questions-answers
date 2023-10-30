
//['ab', 'ac', 'ad','ba', 'bc', 'bd','ca', 'cb', 'cd','da', 'db', 'dc']
const str = 'abcd';
const characters = ["a", "b", "c", "d"];

const combinations = (arr, min = 1, max) => {
  const combination = (arr, depth) => {
    if (depth === 1) {
      return arr;
    } else {
      const result = combination(arr, depth - 1).flatMap((val) =>
        arr.map((char) => val + char)
      );
      return arr.concat(result);
    }
  };

  return combination(arr, max).filter((val) => val.length >= min);
};

const result = combinations(characters, 2, 2);

console.log(`Combinations: ${result.length}`, result);
//output ['aa','ab','ac','ad','ba','bb','bc','bd','ca','cb','cc','cd','da','db','dc','dd','aaa','aab','aac','aad','aba','abb','abc','abd']
/**
 *
 * Return the length of the longest word in the provided sentence.
 *
 * Your response should be a number.
 *
 * */

function findLongestWordLength(str) {
  const arrStr = str.split(' ');
  let longestWord = '';
  for (let i = 0; i < arrStr.length; i++) {
    const currentWord = arrStr[i];
    if (longestWord.length < currentWord.length) {
      longestWord = arrStr[i];
    }
  }
  return longestWord.length;
}

// === TEST === //
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWordLength('May the force be with you'));
console.log(findLongestWordLength('Google do a barrel roll'));
console.log(findLongestWordLength('The average airspeed velocity of an unladen swallow'));
console.log(findLongestWordLength('Try a super-long word such as otorhinolaryngology'));

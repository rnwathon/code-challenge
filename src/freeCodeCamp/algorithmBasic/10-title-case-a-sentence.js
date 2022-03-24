/**
 *
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 *
 * For the purpose of this exercise, you should also capitalize
 * connecting words like "the" and "of".
 *
 * */

function titleCase(str) {
  const loweredCase = str.toLowerCase();
  const arrStr = loweredCase.split(' ');

  for (let i = 0; i < arrStr.length; i++) {
    const word = arrStr[i];
    arrStr[i] = word.substr(0, 1).toUpperCase() + word.substr(1, word.length);
  }

  return arrStr.join(' ');
}

// === TEST === //
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase('sHoRt AnD sToUt'));
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));

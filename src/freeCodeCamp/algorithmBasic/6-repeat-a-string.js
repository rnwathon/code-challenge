/**
 *
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number.
 *
 * For the purpose of this challenge,
 * DO NOT use the built-in .repeat() method.
 *
 * */

function repeatStringNumTimes(str, num) {
  let result = '';

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

// === TEST === //
console.log(repeatStringNumTimes('*', 3));
console.log(repeatStringNumTimes('abc', 3));
console.log(repeatStringNumTimes('abc', 1));
console.log(repeatStringNumTimes('abc', -2));
console.log(repeatStringNumTimes('*', 8));
console.log(repeatStringNumTimes('abc', 0));

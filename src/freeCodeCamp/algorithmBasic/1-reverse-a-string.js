/**
 *
 * Reverse the provided string.
 *
 * You may need to turn the string into an array before you can reverse it.
 *
 * Your result must be a string.
 *
 * */

function reverseString(str) {
  const arrStr = str.split('');
  const lastIndex = arrStr.length - 1;
  const reversedStr = [];
  for (let i = lastIndex; i >= 0; i--) {
    reversedStr.push(arrStr[i]);
  }
  return reversedStr.join('');
}

// === TEST === //
console.log(reverseString('hello'));
console.log(reverseString('Howdy'));
console.log(reverseString('Greetings from Earth'));

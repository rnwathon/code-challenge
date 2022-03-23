/**
 *
 * Check if a string (first argument, str) ends with the given
 * target string (second argument, target).
 *
 * This challenge can be solved with the .endsWith() method,
 * which was introduced in ES2015. But for the purpose of this challenge,
 * we would like you to use one of the JavaScript substring methods instead.
 *
 * */

function confirmEnding(str, target) {
  let isConfirmed = false;
  const lengthToCheck = target.length;
  const startIndex = str.length - lengthToCheck;
  const ending = str.substr(startIndex, lengthToCheck);

  if (ending === target) isConfirmed = true;

  return isConfirmed;
}

// === TEST === //
console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('Congratulation', 'on'));
console.log(confirmEnding('Connor', 'n'));
console.log(confirmEnding('He has to give me a new name', 'name'));
console.log(confirmEnding('Open sesame', 'game'));

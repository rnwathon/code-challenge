/**
 *
 * Return true if the string in the first element of the array
 * contains all of the letters of the string in the second element of
 * the array.
 *
 * For example, ["hello", "Hello"], should return true
 * because all of the letters in the second string are present in the
 * first, ignoring case.
 *
 * The arguments ["hello", "hey"] should return false
 * because the string hello does not contain a y.
 *
 * Lastly, ["Alien", "line"], should return true because all
 * of the letters in line are present in Alien.
 *
 */

function mutation(arr) {
  const firstEl = arr[0].toLowerCase();
  const secondEl = arr[1].toLowerCase();

  for (let i = 0; i < secondEl.length; i++) {
    if (!firstEl.includes(secondEl[i])) return false;
  }

  return true;
}

// === TEST === //
console.log(mutation(['hello', 'hey']));
console.log(mutation(['hello', 'Hello']));
console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));
console.log(mutation(['Mary', 'Army']));
console.log(mutation(['Alien', 'line']));

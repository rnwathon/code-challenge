/**
 *
 * Remove all falsy values from an array.
 *
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 *
 * Hint: Try converting each value to a Boolean.
 *
 */

function bouncer(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const isBoolean = Boolean(arr[i]);
    if (isBoolean) newArr.push(arr[i]);
  }

  return newArr;
}

// === TEST === //
console.log(bouncer([7, 'ate', '', false, 9]));
console.log(bouncer(['a', 'b', 'c']));
console.log(bouncer([false, null, 0, NaN, undefined, '']));
console.log(bouncer([null, NaN, 1, 2, undefined]));

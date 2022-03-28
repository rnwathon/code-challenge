/**
 *
 * Compare two arrays and return a new array with any
 * items only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the two arrays.
 *
 * Note: You can return the array with its elements in any order.
 *
 */

function diffArray(arr1, arr2) {
  const mergedArr = [...arr1, ...arr2];
  const newArr = [];

  for (let i = 0; i < mergedArr.length; i++) {
    const item = mergedArr[i];
    const notInFirst = arr1.indexOf(item) === -1;
    const notInSecond = arr2.indexOf(item) === -1;
    if (notInFirst || notInSecond) newArr.push(item);
  }

  return newArr;
}

// === TEST === //
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]));
console.log(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
);
console.log(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
);

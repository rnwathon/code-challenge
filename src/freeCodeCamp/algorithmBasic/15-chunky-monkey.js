/**
 *
 * Write a function that splits an array (first argument) into
 * groups the length of size (second argument) and returns
 * them as a two-dimensional array.
 *
 */

function chunkArrayInGroups(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i + size) {
    const chunk = arr.splice(i, size);
    result.push(chunk);
  }

  return result;
}

// === TEST === //
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

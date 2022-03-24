/**
 *
 * Truncate a string (first argument) if it is longer than
 * the given maximum string length (second argument).
 * Return the truncated string with a ... ending.
 *
 * */

function truncateString(str, num) {
  if (str.length <= num) return str;
  return `${str.substr(0, num)}...`;
}

// === TEST === //
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11));
console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  )
);
console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  )
);
console.log(truncateString('A-', 1));

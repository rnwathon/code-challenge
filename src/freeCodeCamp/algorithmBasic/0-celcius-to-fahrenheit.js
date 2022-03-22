/* *
 *
 * The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
 *
 * You are given a variable celsius representing a temperature in Celsius.
 * Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
 * Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
 *
 * */

function convertToF(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// === TEST === //
console.log(convertToF(0));
console.log(convertToF(30));
console.log(convertToF(-30));
console.log(convertToF(-10));
console.log(convertToF(0));
console.log(convertToF(20));

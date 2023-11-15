// Tests for equality and inequality with strings
var fruit = 'apple';
// Test 11
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit === 'apple');
// Test 12
console.log("Is fruit not equal to 'banana'? I predict True.");
console.log(fruit !== 'banana');
// Tests using the lower case function
var text = 'Hello World';
// Test 13
console.log("Is text in lowercase equal to 'hello world'? I predict True.");
console.log(text.toLowerCase() === 'hello world');
// Numerical tests
var numberA = 10;
var numberB = 5;
// Test 14
console.log("Is numberA greater than numberB? I predict True.");
console.log(numberA > numberB);
// Test 15
console.log("Is numberA less than or equal to numberB? I predict False.");
console.log(numberA <= numberB);
// Test 16
console.log("Is the sum of numberA and numberB equal to 15? I predict True.");
console.log(numberA + numberB === 15);
// Tests using "and" and "or" operators
var isSunny = true;
var isWarm = false;
// Test 17
console.log("Is it sunny and warm? I predict False.");
console.log(isSunny && isWarm);
// Test 18
console.log("Is it sunny or warm? I predict True.");
console.log(isSunny || isWarm);
// Test whether an item is in an array
var colors = ['red', 'blue', 'green'];
// Test 19
console.log("Is 'blue' in the colors array? I predict True.");
console.log(colors.includes('blue'));
// Test whether an item is not in an array
// Test 20
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow'));

"use strict";
// Equality and inequality Test 1
console.log("Equality test with string:", "Apple" === "Apple");
// Equality and inequality Test 2
console.log("Equality test with string:", "Apple" != "Orange");
// Tests using the lower case function
console.log("Equality test with string:", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality and inequality
console.log("Equality test with string:", 26 === 26);
// greater than and less than
console.log("Greater than test:", 10 > 5);
// greater than or equal to
console.log("Greater than equal to test:", 10 >= 10);
// less than or equal to
console.log("less than or equal to test:", 5 <= 10);
// Test using "and" operator
console.log("and operator test:", 5 === 5 && 10 > 5);
//  Test using "or" operator
console.log("or operator test:", 5 === 5 || false);
// Test whether an item is in a array
const fruit = ["Orange", 'banana', 'kiwi'];
console.log('Test "orange" in the array: ', fruit.includes("Orange"));
// Test whether an item is in a array
console.log('Test "orange" in the array: ', !fruit.includes("Apple"));

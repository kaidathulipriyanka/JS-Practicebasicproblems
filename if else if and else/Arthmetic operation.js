/* Enter 3 Numbers do following arithmetic operation and find the one that
is maximum and minimum
1. a + b * c 3. c + a / b
2. a % b + c 4. a * b + c
*/

const a = parseFloat(prompt("Enter the value of a:"));
const b = parseFloat(prompt("Enter the value of b:"));
const c = parseFloat(prompt("Enter the value of c:"));

const result1 = a + b * c;
const result2 = c + a / b;
const result3 = a % b + c;
const result4 = a * b + c;

let max = result1;
let min = result1;

if (result2 > max) {
    max = result2;
} else if (result2 < min) {
    min = result2;
}

if (result3 > max) {
    max = result3;
} else if (result3 < min) {
    min = result3;
}

if (result4 > max) {
    max = result4;
} else if (result4 < min) {
    min = result4;
}

console.log("Maximum Result: " + max);
console.log("Minimum Result: " + min);

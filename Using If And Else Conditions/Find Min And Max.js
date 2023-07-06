/* # Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value */

function getRandomNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomNumber());
}

console.log("Random Numbers:", numbers);
console.log("Minimum Value:", Math.min(...numbers));
console.log("Maximum Value:", Math.max(...numbers));

const number = parseInt(prompt("Enter a number:"));

let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(number + " factorial (!) = " + factorial);

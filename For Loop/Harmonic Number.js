
const n = parseInt(process.argv[2]);
if (n <= 0) {
  console.log("Invalid input. Please enter a positive integer.");
} else {
  let harmonicNumber = 0;

  for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
  }

  console.log("The " + n + "th harmonic number is: " + harmonicNumber.toFixed(2));
}

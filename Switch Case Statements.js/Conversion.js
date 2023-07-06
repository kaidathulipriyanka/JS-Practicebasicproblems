// Program for unit conversion based on user inputs:

const choice = parseInt(prompt("Choose an option:\n1. Feet to Inch\n2. Inch to Feet\n3. Feet to Meter\n4. Meter to Feet"));
const value = parseFloat(prompt("Enter the value to convert:"));
let result;
switch (choice) {
  case 1:
    result = value * 12;
    console.log(value + " feet = " + result + " inches");
    break;
  case 2:
    result = value / 12;
    console.log(value + " inches = " + result + " feet");
    break;
  case 3:
    result = value / 3.281;
    console.log(value + " feet = " + result + " meters");
    break;
  case 4:
    result = value * 3.281;
    console.log(value + " meters = " + result + " feet");
    break;
  default:
    console.log("Invalid choice");
}

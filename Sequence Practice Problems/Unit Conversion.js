/*Use Script & Debug – Unit Conversion

a. 1ft = 12 in then 42 in = ? ft
b. Rectangular Plot of 60 feet x 40 feet in meters
c. Calculate area of 25 such plots in acres */

// a. 1ft = 12 in then 42 in = ? ft
const inches = 42;
const feet = inches / 12;
console.log(inches + " in =", feet + " ft");

// b. Rectangular Plot of 60 feet x 40 feet in meters
const lengthFeet = 60;
const widthFeet = 40;
const lengthMeters = lengthFeet * 0.3048; // 1 foot = 0.3048 meters
const widthMeters = widthFeet * 0.3048;
console.log(lengthFeet + " ft x " + widthFeet + " ft =", lengthMeters + " m x " + widthMeters + " m");

// c. Calculate the area of 25 such plots in acres
const areaInSquareFeet = lengthFeet * widthFeet;
const areaInAcres = areaInSquareFeet * 25 / 43560; // 1 acre = 43560 square feet
console.log("Area of 25 plots:", areaInAcres + " acres");

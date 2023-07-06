/*Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise.*/

const day = parseInt(process.argv[2]);
const month = parseInt(process.argv[3]);

if (month === 3 && day >= 20 || month === 6 && day <= 20) {
    console.log(true);
} else if (month > 3 && month < 6) {
    console.log(true);
} else {
    console.log(false);
}

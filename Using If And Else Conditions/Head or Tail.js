// # Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

function coinFlip() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

console.log("Coin flip result: " + coinFlip());

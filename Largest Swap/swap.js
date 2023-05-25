// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

function largeSwap(num) {
  return num.toString().split("").reverse().join("") <= num
}

console.log(largeSwap(99));
// console.log(largeSwap(53));
// console.log(largeSwap(14));
// console.log(largeSwap(27));
// console.log(largeSwap(43));


// let him = "rick"
// let split = him.split("")
// let reverse = split.reverse().join("")
// console.log(reverse);

// let largeSwaps = 27
// let splits = largeSwaps.toString().split("")
// let reverses = splits.reverse().join("")
// console.log(reverses);



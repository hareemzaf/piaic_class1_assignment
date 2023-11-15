// Store the numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Store the numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    // Use an if-else chain to print the proper ordinal ending for each number
    if (currentNumber === 1) {
        console.log(`${currentNumber}st`);
    } else if (currentNumber === 2) {
        console.log(`${currentNumber}nd`);
    } else if (currentNumber === 3) {
        console.log(`${currentNumber}rd`);
    } else {
        console.log(`${currentNumber}th`);
    }
}


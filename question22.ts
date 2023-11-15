//numbers
const numbers:number[] = [1, 2, 3, 4, 5];

//error
const invalidIndex =  10;

//
if(invalidIndex >= 0 && invalidIndex < numbers.length) {
console.log(`Accessing element at index ${invalidIndex}: ${numbers[invalidIndex]}`);
} else {
    console.log(`invalid index ${invalidIndex}.place provide a valid index.`);
}

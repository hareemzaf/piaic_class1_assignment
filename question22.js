//numbers
var numbers = [1, 2, 3, 4, 5];
//error
var invalidIndex = 10;
//
if (invalidIndex >= 0 && invalidIndex < numbers.length) {
    console.log("Accessing element at index ".concat(invalidIndex, ": ").concat(numbers[invalidIndex]));
}
else {
    console.log("invalid index ".concat(invalidIndex, ".place provide a valid index."));
}

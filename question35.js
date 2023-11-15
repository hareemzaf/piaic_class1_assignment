var animals = ["dog", "cat", "rabbit"];
// Print the names of each animal
console.log("Names of animals:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
// Print a sentence about the common characteristic
console.log("\nCommon characteristic:");
console.log("Any of these animals would make a great pet!");

//
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt is size ${size} and it says: "${message}"`);
}

// Make a large shirt with the default message
make_shirt();

// Make a medium shirt with the default message
make_shirt("Medium");

// Make a shirt of any size with a different message
make_shirt("Small", "Custom message for a small shirt!");

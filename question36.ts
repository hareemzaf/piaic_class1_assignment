//
function make_shirt(size: string, message: string): void {
    console.log(`The shirt is size ${size} and it says: "${message}"`);
    console.log(`message: ${message}`);
    console.log("summary: the shirt is size" + size + "and has the message:'" + message + "'."  )
}

// Call the function with specific size and message
make_shirt("Medium", "Hello, World!");

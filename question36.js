//
function make_shirt(size, message) {
    console.log("The shirt is size ".concat(size, " and it says: \"").concat(message, "\""));
    console.log("message: ".concat(message));
    console.log("summary: the shirt is size" + size + "and has the message:'" + message + "'.");
}
// Call the function with specific size and message
make_shirt("Medium", "Hello, World!");

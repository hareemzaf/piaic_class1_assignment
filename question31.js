//names
var usernames = ["admin", "tasleem", "huma", "nargis", "najma"];
// check if the list of user is not empty
if (usernames.length > 0) {
    //greeting
    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        if (usernames[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
        }
    }
}
else {
    console.log("we need to grow our user base");
}
//remove all of the usernames
usernames = [];
//check if the list of user names is not empty
if (usernames.length > 0) {
    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        if (usernames[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
        }
    }
}
else {
    console.log("we need to grow our user base");
}

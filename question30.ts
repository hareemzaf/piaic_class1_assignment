//names
let usernames: string[] = ["admin", "tasleem", "huma", "nargis", "najma"];

//greething
for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];
    
    if (usernames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}


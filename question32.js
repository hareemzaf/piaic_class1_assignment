// list of current user
var currents = ['imtiaz', 'faisal', 'fahad', 'shoaib', 'arfad'];
//list new user
var newusers = ['nazia', 'khadija', 'aisha', 'uzma', 'atiqa'];
var _loop_1 = function (newUser) {
    //
    var lowercasenewuser = newUser.toLowerCase();
    var isUnique = !currents.some(function (currentUser) { return currentUser.toLowerCase() === lowercasenewuser; });
    //print a message based on the result
    if (isUnique) {
        console.log("username '".concat(newUser, "'is available."));
    }
    else {
        console.log("sorry, the username '".concat(newUser, "'is already taken.enter a new name."));
    }
};
for (var _i = 0, newusers_1 = newusers; _i < newusers_1.length; _i++) {
    var newUser = newusers_1[_i];
    _loop_1(newUser);
}

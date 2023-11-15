//list
var guestlist = ["Unzila", "Sumbul", "Nawal", "Sabiha", "Lubaba"];
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Dear ".concat(guest, ",\n\tYou are invited to dinner.place join us!\nsincerely,[Hareem]"));
}
console.log("\nYeah! we found a bigger dinner table.\n");
//now new guest
var newguest = ["Aqib", "Haleema"];
guestlist.unshift(newguest[0]);
guestlist.splice(Math.floor(guestlist.length / 2), 0, newguest[1]);
guestlist.push("Hunzala");
//each person invitation
for (var _a = 0, guestlist_2 = guestlist; _a < guestlist_2.length; _a++) {
    var guest = guestlist_2[_a];
    console.log("Dear ".concat(guest, ",\n\tYou are invited to dinner.place join us!\nsincerely,[Hareem]"));
}
console.log("\nUnfortunately, the new dinner and we can only invited two people for dinner.\n");
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    console.log("sorry,".concat(removedguest, ", we can't invited you."));
}
for (var _b = 0, guestlist_3 = guestlist; _b < guestlist_3.length; _b++) {
    var remainingguest = guestlist_3[_b];
    console.log("Dear ".concat(remainingguest, ",\n\tYou are still invited to dinner.\nsincerely, [Hareem]"));
}
//
guestlist = [];
console.log("\nRemaining guest list:", guestlist);

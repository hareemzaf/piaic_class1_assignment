//Guest List
var GuestList = ["unzila", "faria", "rimsha", "saima"];
//invitation
for (var _i = 0, GuestList_1 = GuestList; _i < GuestList_1.length; _i++) {
    var guest = GuestList_1[_i];
    console.log("dear ".concat(guest, ",you are invited to dinner"));
}
//change in guest list
var guestcanmakeit = "hania";
var newinvitee = "usama";
//guest name who can't make it
console.log("\nUnfortunately,".concat(guestcanmakeit, "can't make it do the dinner.\n"));
//replace the guest name who can't make it with a new invite
var IndexToRemove = GuestList.indexOf(guestcanmakeit);
if (IndexToRemove !== -1) {
    GuestList.splice(IndexToRemove, 1, newinvitee);
}
//updated invitation messages
for (var _a = 0, GuestList_2 = GuestList; _a < GuestList_2.length; _a++) {
    var guest = GuestList_2[_a];
    console.log("Dear ".concat(guest, ",you are invited to dinner."));
}

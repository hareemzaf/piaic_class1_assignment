//original guest list 
var originalGuestList = [
    "irfan",
    "farhan",
    "kamran",
];
//
function generateInvitation(guest) {
    return guest.map(function (guest) { return "Dear ".concat(guest, ", you are invited to dinner."); });
}
//invited guest
var OriginalInvitation = generateInvitation(originalGuestList);
//original invitation
OriginalInvitation.forEach(function (invitation) { return console.log(invitation); });
//
var guestNotAvailable = "Aqib";
console.log("".concat(guestNotAvailable, "can't make it do dinner."));
var UpdatedGuestList = originalGuestList.map(function (guest) {
    return guest === guestNotAvailable ? "Abdullah" : guest;
});
//bigger dinner table beginning of the array
console.log("we found a bigger dinner table");
//add one guest
UpdatedGuestList.unshift("malaika");
//middle dinner table middle of the array
var middleIndex = Math.floor(UpdatedGuestList.length / 2);
UpdatedGuestList.push("sumbul");
//new invitation
var newinvitation = generateInvitation(UpdatedGuestList);
//updated invitation
newinvitation.forEach(function (invitation) { return console.log(invitation); });

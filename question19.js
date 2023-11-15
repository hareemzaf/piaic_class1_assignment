//original guest list
var originalGuestList = [
    "irfan",
    "farhan",
    "kamran",
];
function generateInvitation(guest) {
    return guest.map(function (guest) { return "Dear ".concat(guest, ", you are invited to dinner!"); });
}
//invited guests
var OriginalInvitations = generateInvitation(originalGuestList);
//original invitation
OriginalInvitation.forEach(function (invitation) { return console.log(invitation); });
//people invited to dinner
console.log("we are inviting ".concat(originalGuestList.length, "people to dinner."));

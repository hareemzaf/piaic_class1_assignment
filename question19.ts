//original guest list
const originalGuestList: string[] = [
    "irfan",
    "farhan",
    "kamran",
];

function generateInvitation(guest:[]): string[] {
return guest.map((guest) => `Dear ${guest}, you are invited to dinner!`);
}

//invited guests
const OriginalInvitations: string[] = generateInvitation(originalGuestList);

//original invitation
OriginalInvitation.forEach((invitation) => console.log(invitation));

//people invited to dinner
console.log(`we are inviting ${originalGuestList.length}people to dinner.`);

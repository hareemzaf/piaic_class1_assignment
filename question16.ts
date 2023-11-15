//original guest list 
const originalGuestList: string[] = [
    "irfan",
    "farhan",
    "kamran",
];

//
function generateInvitation(guest: string[]): string[] {
    return guest.map((guest) => `Dear ${guest}, you are invited to dinner.`);
}

//invited guest
const OriginalInvitation: string[] = generateInvitation(originalGuestList);
 
//original invitation
OriginalInvitation.forEach((invitation) => console.log(invitation));

//
const guestNotAvailable = "Aqib";
console.log(`${guestNotAvailable}can't make it do dinner.`);

const UpdatedGuestList = originalGuestList.map((guest) =>
 guest === guestNotAvailable ? "Abdullah" : guest
);

//bigger dinner table beginning of the array
console.log("we found a bigger dinner table");

//add one guest
UpdatedGuestList.unshift("malaika");

//middle dinner table middle of the array
const middleIndex = Math.floor(UpdatedGuestList.length / 2);
UpdatedGuestList.push("sumbul");

//new invitation
const newinvitation: string[] = generateInvitation(UpdatedGuestList);
 
//updated invitation
 newinvitation.forEach((invitation) => console.log(invitation));



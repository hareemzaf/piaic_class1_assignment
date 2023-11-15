//Guest List
const GuestList: string[] = ["unzila","faria","rimsha","saima"];

//invitation
for(const guest of GuestList){
    console.log(`dear ${guest},you are invited to dinner`);
}

//change in guest list
const guestcanmakeit:string = "hania";
const newinvitee: string = "usama";

//guest name who can't make it
console.log(`\nUnfortunately,${guestcanmakeit}can't make it do the dinner.\n`);

//replace the guest name who can't make it with a new invite
const IndexToRemove: number = GuestList.indexOf(guestcanmakeit);
if (IndexToRemove !== -1){
    GuestList.splice(IndexToRemove, 1, newinvitee);
}

//updated invitation messages
for (const guest of GuestList){
    console.log(`Dear ${guest},you are invited to dinner.`);
}


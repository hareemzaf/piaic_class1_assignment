//list
let guestlist: string[] = ["Unzila", "Sumbul", "Nawal","Sabiha", "Lubaba" ];
  
for (const guest of guestlist){
     console.log(`Dear ${guest},\n\tYou are invited to dinner.place join us!\nsincerely,[Hareem]`);
}

console.log("\nYeah! we found a bigger dinner table.\n");

//now new guest
const newguest: string[] = ["Aqib","Haleema"];
guestlist.unshift(newguest[0]);
guestlist.splice(Math.floor(guestlist.length / 2), 0, newguest[1]);
guestlist.push("Hunzala");

//each person invitation
for (const guest of guestlist ) {
    console.log(`Dear ${guest},\n\tYou are invited to dinner.place join us!\nsincerely,[Hareem]`);
}

console.log("\nUnfortunately, the new dinner and we can only invited two people for dinner.\n");

while (guestlist.length > 2) {
    const removedguest = guestlist.pop();
    console.log(`sorry,${removedguest}, we can't invited you.`);
}

for(const remainingguest of guestlist) {
console.log(`Dear ${remainingguest},\n\tYou are still invited to dinner.\nsincerely, [Hareem]`);
}

//
guestlist = [];

console.log("\nRemaining guest list:",guestlist);


// list of current user
const currents: string[] = ['imtiaz','faisal','fahad','shoaib','arfad'];

//list new user
const newusers: string[] = ['nazia','khadija', 'aisha', 'uzma', 'atiqa'];

for (let newUser of newusers) {
//
const lowercasenewuser = newUser.toLowerCase();
const isUnique = !currents.some((currentUser) => currentUser.toLowerCase() === lowercasenewuser);

//print a message based on the result

if (isUnique) {
    console.log(`username '${newUser}'is available.`);
 } else {
    console.log(`sorry, the username '${newUser}'is already taken.enter a new name.`);
 }
}
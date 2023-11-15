function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

// Array of magician's names
let magicianNames: string[] = ["hermione granger", "Harry potter", "Ron weasley", "Albus dumbedore","Ginney"];


let greatMagicians: string[] = make_great([...magicianNames]); // Using the spread operator to create a copy


console.log("Original Magicians:");
show_magicians(magicianNames);


console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

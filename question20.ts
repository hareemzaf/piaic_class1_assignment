//languages name's
const languages: string[] = [
    "Urdu",
    "english",
    "arabic",
    "german",
    "french",
    "spanish",];

//list of languages
console.log("list of languages:");
languages.forEach((language, index) => console.log(`${index + 1}. ${language}`));

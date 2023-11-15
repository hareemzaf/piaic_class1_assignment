//languages name's
var languages = [
    "Urdu",
    "english",
    "arabic",
    "german",
    "french",
    "spanish",
];
//list of languages
console.log("list of languages:");
languages.forEach(function (language, index) { return console.log("".concat(index + 1, ". ").concat(language)); });

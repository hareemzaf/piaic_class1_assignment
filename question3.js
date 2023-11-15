//person name 
var personName = "unzila";
//lower case
console.log("lowercase: ".concat(personName.toLowerCase()));
//name in upper case
console.log("uppercase: ".concat(personName.toUpperCase()));
//title name
var TitleCaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("titlecase: ".concat(TitleCaseName));

//person name 
const personName: string = "unzila";
//lower case
console.log(`lowercase: ${personName.toLowerCase()}`);
//name in upper case
console.log(`uppercase: ${personName.toUpperCase()}`);
//title name
const TitleCaseName = personName.replace(/\b\w/g, (char) => char .toUpperCase());
console.log(`titlecase: ${TitleCaseName}`);


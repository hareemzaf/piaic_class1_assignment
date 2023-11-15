//whitespace characters
const personNameWithWhitespace: string = "\t\n  UnZiLaHaReeM  \t\n";

//surrounding whitespace
console.log(`name with whitespace:"${personNameWithWhitespace}`);

//strip the whitespace
const strippedname: string = personNameWithWhitespace.trim();
console.log(`stripped name:"${strippedname}`);


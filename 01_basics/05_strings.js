const name = "Pranjal"
const repoCount= 50

// console.log(name+repoCount)

console.log(`Hello my name is ${name} and I have ${repoCount} repos`);

const gameName = new String('Pranjal-sc')
console.log(gameName[0]);
console.log(gameName.__proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString= gameName.substring(0, 4);
console.log(newString);

const anotherString= gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne="  Pranjal  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'))
console.log(gameName.split('-'));



let score = 33 //if "33" then its string

console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// "33"-> 33
// "33abc" -> NaN
// true -  1; false - 0


let isLoogedin = 1 // string mein khali chod do its false and name wagera likho then true

let booleanIsLoggedIn = Boolean(isLoogedin)
console.log(booleanIsLoggedIn); // true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber); // "33"
// console.log( typeof stringNumber);



//**************************** OPERATIONS

let value = 3
let negValue = -value
// console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1 = "hello"
let str2 = " Pranjal"

let str3 = str1 + str2
//console.log(str3); // hello Pranjal

//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1"+ 2 + 2);
//console.log(1 + 2 + "2");

console.log(+true); //1 but if true+ then error
console.log(+"");


let gameCounter = 100
gameCounter++ 
console.log(gameCounter); // 101

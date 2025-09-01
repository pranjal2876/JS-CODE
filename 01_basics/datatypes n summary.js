// PRIMITIVE DATA TYPE
// String, Number, Boolean, Undefined, Null, Symbol, BigInt 7 TYPES

const score = 100 
const scoreValue = 100.3
const isLoggedIn= false
const outsideTemp =  null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false, symbols are unique
//const bigNumber = BigInt(1234567890123456789012345678901234567890n);

//REFERENCE (NON PRIMITIVE DATA TYPE)
// Object, Array, Function, Date, RegExp, Map, Set 


const heroes = ["shaktiman", "naagraj", "doga"]

let myObj ={
    name: "Pranjal",
    age: 19,
    
}

 
const myFunction = function() {
    console.log("Hello World");
}  

console.log(typeof bigNumber); // "bigint"

// +*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*

// Stack(Primitive), Heap (Non primitive) (Two memories)

let myYoutubename = "Pranjal";
let anotherName = myYoutubename;
another

console.log(anotherName);
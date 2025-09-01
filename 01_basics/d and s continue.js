// memory
// Stack(Primitive) isme copy milegi, Heap(Non Primitive) isme original value mein change hoga


let myYoutubename = "Pranjaldotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername); 

let userOne = {
    email: "user@google.com",
    upi: "user@ibl",

}

let userTwo = userOne

userTwo.email = "hitesh@google.com"
console.log(userOne.email); 
console.log(userTwo.email);
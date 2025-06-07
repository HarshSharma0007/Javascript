// Primitive Datatype : Boolean , Number , String ,BigInt, Symbol, null , undefined

const score = 100

const scoreValur = 100.3

const isLoggedIn = false

const outsideTemp = null

let userMail;

const id = Symbol('123')
const anotherid = Symbol('123')

// Arrays

const hero = ["h1", "h2", "h3"]

let myObj = {
    name : "myname",
    age : 19,
}

const myFunction = function(){
    console.log("Hello");
    
}
console.log(typeof null);
console.log(typeof myObj);
console.log(typeof id);
console.log(typeof hero);


console.log(typeof myFunction)

// **********************
// MEMORY
// **********************
// STACK - PRIMITIVE
// HEAP - NON-PRIMITIVE (we will get reference)

let myYoutubeName = "HR"
let anotherName = myYoutubeName
anotherName = "RS"

console.table([myYoutubeName, anotherName])
// heap ---- single value
let user1 = {
    email :"user.google.com",
    upi : "suer1upi",
}

let user2 = user1

user2.email = "user2@email"

console.table([user1.email, user2.email])
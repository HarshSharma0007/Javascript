const name = "alex"
const repoCount = 50

// console.log(name + repoCount + " Value.");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// String is a KEY-VALUE pair

const gameName = new String("hitesh-hc-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__); // syntax only

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newStr = gameName.substring(0,4)
console.log(newStr);

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newString = "  hir        "

console.log(newString);
console.log(newString.trim());


const url = "www.htech/work%20for%20students"

console.log(url.replaceAll('%20', "-"))

console.log(url.includes("students"));

console.log(gameName.split("-"));


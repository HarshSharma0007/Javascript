const score = 400
console.log(score);

const balance = new Number(100)

console.log(balance) 


console.log(balance.toString().length);

console.log(balance.toFixed(2));


const otherNumber = 23.231

console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++MATH+++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.sqrt(25));
console.log(Math.round(23.3));
console.log(Math.floor(2.333));

console.log(Math.random());

console.log(Math.min(3,2,1,2,2,3,4));

const min = 10
const max = 20

Math.random()


console.log(Math.floor(Math.random() * (max-min+1))+min)
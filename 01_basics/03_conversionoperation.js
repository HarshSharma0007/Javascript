let id ="44"
let variable = "Hello 34"
let id2 = undefined
let id3 = true

// console.log(typeof id );
// console.log(typeof variable);
// console.log(typeof (id3));

let valueofid = Number(id)
let valueofvar = Number(variable)
let valueofid2 =Number(id3)


// console.log(typeof valueofid);
// console.log(typeof valueofvar);
// console.log(valueofvar); // NAN
// console.log(typeof valueofid3)

// "33" = Number => 33
// "33abc" = Number => NaN
// true =Boolean => 1;
// false =Boolean=> 0;
// 22 =String=> "22"

// console.log(valueofid);
// console.log(valueofvar);


// 0 or "" => false
// 1 or "gd" => true

let boolvariable = Boolean(variable)
// console.log( boolvariable);

let stringid = String(id)
// console.log(stringid);


// ******************OPERATIONs**********************

console.log(1+3+"3")
// o/p => 43

// vs

console.log("1"+3+3);
// o/p => 133

// NOT RECOMMENDED TO USE (^_^)
// NOT A NICE WAY 

console.log(true)
console.log(+true); // confusing code (adding true with nothing gives 1) 
// if add null or false than we will produce 0

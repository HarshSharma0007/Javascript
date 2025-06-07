// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());


// let createData = new Date(2025,0,23)
// console.log(createData.toDateString());


let createData = new Date("2023-01-14")
// console.log(createData.toLocaleString());


let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(Math.floor(myTimestamp/1000));

// console.log(myDate.getDay()) 

myDate.toLocaleString('default',{
    weekday: "long",
})
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())


let myCreatedDate0 = new Date(2024,11,13)
console.log(myCreatedDate0.toDateString())


let myCreatedDate1 = new Date("08-03-2003")
console.log(myCreatedDate1.toLocaleString()) 


 let myCreatedDate2 = new Date("2023-01-14")
 console.log(myCreatedDate2.toLocaleString())  


 let myCreatedDate = new Date("08-03-2003");
let myTimeStamp = myCreatedDate.getTime(); // Gets the timestamp (milliseconds since 1970-01-01 UTC)
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
console.log(myCreatedDate.getDay())


console.log(Date.now())
console.log(Math.floor(Date.now()/1000)) 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{weekday:"long"}))





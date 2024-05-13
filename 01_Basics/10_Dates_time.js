// ++++++++++++++++ Dates ++++++++++++++++++++

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // Interview Mcqs

let myCreatedDate = new Date(2023, 0, 23, 5, 7)
console.log(myCreatedDate.toDateString()); // Moths start from zero in JavaScript
console.log(myCreatedDate.toLocaleString());

let myCreatedDates = new Date("2024-03-27") // In single Digit month start from xero but in format it starts from 01
console.log(myCreatedDates.toDateString());
console.log(myCreatedDates.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // It will give date in millisecond
console.log(myCreatedDate.getTime()); // It will give millsecond Time of myCreatedDate
// Millisecond used For comparision in big Prohjects

console.log(Date.now()/1000); // to get date in seconds interview question problem arises sometimes it give answer in decimal so we use Math.floor
console.log(Math.floor(Date.now()/1000));

let newDate =new Date ()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getTime());
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
   weekday: "long",
})  // This is used to  customize Format

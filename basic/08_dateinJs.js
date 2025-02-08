//  let myDate = new Date;
//  console.log(myDate);  // 2025-02-08T09:02:52.670Z
//  console.log(myDate.toDateString()); // Sat Feb 08 2025
//  console.log(myDate.toString());  // Sat Feb 08 2025 09:04:29 GMT+0000 (Coordinated Universal Time)
//  console.log(myDate.toISOString());  // 2025-02-08T09:05:08.999Z
//  console.log(myDate.toJSON());   // 2025-02-08T09:05:48.235Z
//  console.log(myDate.toLocaleString()); //2/8/2025, 9:07:14 AM
//  console.log(myDate.toLocaleDateString());  // 2/8/2025
//  console.log(myDate.toLocaleTimeString());  // 9:08:35 AM
//  console.log(myDate.toUTCString());   // Sat, 08 Feb 2025 09:09:04 GMT
//  console.log(myDate.getTimezoneOffset());

 //*****
//  console.log(typeof myDate);  // object

//  let myCreatedDate = new Date(2025,0,5)
//  console.log(myCreatedDate); //2025-02-05T00:00:00.000Z

//  console.log(myCreatedDate.toDateString());  // Sun Jan 05 2025 

 // in js month starting with 0 means january

 let myNewDate = new Date("01-16-2025")
 console.log(myNewDate.toLocaleDateString());   // 1/16/2025

 let myTimeStamp = Date.now()
//  console.log(myTimeStamp);   // 1739006561320  this value in mili second.
//  console.log(myNewDate.getTime());

console.log(Math.floor(Date.now()/1000));  // 1739006835 this value in the second

let newDate = new Date()

console.log(newDate);


console.log(newDate.getMonth()); // 1 -> Febuary
console.log(newDate.getDay());  // 6 -> Sat. starting -> Monday.


newDate.toLocaleString('default',
    {
        weekday : 'narrow'
        
    }
)
console.log(newDate);







 
 
 
 

 

 
  
 
 
 
 
 
 
 
 
// singleton
//Object.create // -> constructor method. -> later disscuss

// object literals

let mySym = Symbol("key1")

const jsUser = {
    name: "Aslam",
    age: 20,
    [mySym]: "mykey1",  // Symbol delcration in object***
    location: "Motihari",
    Email: "devmotihari845401@gmail.com",
    isLogged: false,
    lastLoginDays: ["Sunday","Tuesday"]

}

// how to access object 

// console.log(jsUser.Email);  // devmotihari845401@gmail.com
// // OR
// console.log(jsUser["Email"]);   // devmotihari845401@gmail.com

// // Symbol access in object 

// console.log(jsUser[mySym]);  // mykey1

// how to change value in object 

// jsUser.Email= "aslamdev@chatgpt.com" 

// console.log(jsUser.Email);  // aslamdev@chatgpt.com

// Object.freeze(jsUser);  // freeze the object

// jsUser.Email = "aslamdev@yahoo.com"

// console.log(jsUser);
/*
output
{
  name: 'Aslam',
  age: 20,
  location: 'Motihari',
  Email: 'aslamdev@chatgpt.com',
  isLogged: false,
  lastLoginDays: [ 'Sunday', 'Tuesday' ],
  [Symbol(key1)]: 'mykey1'
}
*/

jsUser.greeting = function(){
    console.log(`Hello JS User ${this.age}`);
}

// console.log(jsUser.greeting);  // [Function (anonymous)]

console.log(jsUser.greeting());







 













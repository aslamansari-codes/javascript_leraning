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

console.log(jsUser.Email);  // devmotihari845401@gmail.com
// OR
console.log(jsUser["Email"]);   // devmotihari845401@gmail.com

// Symbol access in object 

console.log(jsUser[mySym]);  // mykey1










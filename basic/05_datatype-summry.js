// Primitive Data type
/* 7 Types :- => String known as call by value
// String 
  Number:-  let score = 10, const scoreValue = 100.3;
  Boolean :- let isLoggedIn = false;
  Null :-  let outsideTemp = null;    // return type of null is Object
  Undefined :- let userEmail;
  Symbol :- let id = Symbol('123') //  Return type of id is Symbol
            let anotherId = Symbol('123')
            console.log(id===anotherId);  // false, because symbol provide indiviual vairiables
  BigInt :- let myNumber = 3525599896566n

  */

  // Reference Type ( Non-Primitive type) :-
 /*
   Array :- const myHero = ["Balveer","Saktiman","Nagraj"];  //  Return type of myHero is Object


   Object :- const myObj = {                                              
        name : "Aslam",                 //  Return type of myObj is Object
        age : 21,
   }
   Function  :-  const myFunction = function(){   

    console.log("Hello nerds");             // Return type of myFunction is Object Function
   }
 */

   // +++++++++++++++++++++++++++++++++++++++

   // Stack (Primitive Type),  Heap (Non- Primitive)

   /*let myName = "AslamAnsari"

   let anotherName = myName
   anotherName = "aslam776688"
   console.log(anotherName);        // in Stack make duplicate copy of variable
   console.log(myName);
   
   */

   let userOne ={
        Email: "aslam@google.com",
        Upi: "xxxx@ybl"
   }

   let userTwo = userOne

   
   userTwo.Email = "aslamansari8@google.com"
   console.log(userTwo.Email);
   console.log(userOne.Email);
   
   
   

   





   




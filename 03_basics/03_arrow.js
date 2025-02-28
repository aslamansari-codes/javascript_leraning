/*
const user = {
    username:  "Aslam Ansari",
    price:  199,
        
    welcomeMessage: function(){

        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    
    }
}

user.welcomeMessage()
user.username = "Rakesh"
user.welcomeMessage()

*/

// ++++++++++ output  

/*

Aslam Ansari, welcome to website
{
  username: 'Aslam Ansari',
  price: 199,
  welcomeMessage: [Function: welcomeMessage]
}
Rakesh, welcome to website
{
  username: 'Rakesh',
  price: 199,
  welcomeMessage: [Function: welcomeMessage]

}

*/

// function myfun() {

//     let username = "Rajkesh"
//     console.log(this.username);
    
// }
// myfun()  // undefined

//++++++++++++++++ Arrow function
/*
const myNewFun = () => {

    let username = "aslam2308"
    // console.log(this.username);
    // console.log(this);
    
    
}
myNewFun() 

*/
/*
const addTwo = (num1, num2) => {
    return num1+num2
}*/
//console.log(addTwo(8,10));  // 18

// implicit return 

// const addTwo = (num1, num2) =>   num1+num2

// const addTwo = (num1, num2) =>  (num1+num2) 
const addTwo = (num1, num2) =>  ({username: "akash raj"}) 

console.log(addTwo(8,25));   // 33





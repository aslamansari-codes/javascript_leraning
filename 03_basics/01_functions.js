function showName(){
    console.log("A");
    console.log("S");
    console.log("L");
    console.log("A");
    console.log("M"); 
}

//showName()

/*  ++++++++++ output +++++++++++

A
S
L
A
M

*/

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(6,3)  // 9

// let result = addTwoNumbers(8,10); // 18
// console.log("Result:-",result);
/* output
18
Result:- undefined

*/
//  *********************** +++++++++++++++++  ***************
/*
function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result;
    console.log("Hello nerds");  // "This is reachable code"
    
    return number1 + number2
    console.log("Hello nerds");  // "This is unreachable code"
    
}
let result = addTwoNumbers(8,10);
console.log("Result:-",result); // Result:- 18

*/

/*

function userLoggedIn(username){
    return `${username} Just Logged In`
}

let check = userLoggedIn("Aslam")
console.log(check);  // Aslam Just Logged In

let check1 = userLoggedIn("")
console.log(check1);  //  Just Logged In

let check2 = userLoggedIn()
console.log(check2);  // undefined Just Logged In

*/

// ************ if-else intro with function *****************
/*
function userLoggedIn(username){
    if (username === undefined) {

        console.log("Please enter a username");
        return;
        
        
    }
    return `${username} Just Logged In`
}

let check = userLoggedIn()
console.log(check);  // Please enter a username
*/

// ********** How professional use it ***************
/*
function userLoggedIn(username){
    if (!username) {

        console.log("Please enter a username");
        return;
        
        
    }
    return `${username} Just Logged In`
}

let check = userLoggedIn()
console.log(check);  // Please enter a username

*/

// ********** new approach *************
/*
function userLoggedIn(username = "robot"){
    if (!username) {

        console.log("Please enter a username");
        return;
        
        
    }
    return `${username} Just Logged In`
}

let check = userLoggedIn()
console.log(check);  // robot Just Logged In

let check2 = userLoggedIn("Raja")  // replace the robot from Raja
console.log(check2);  // Raja Just Logged In

*/

/*
function calculateCartPrice(num1) {

    return num1

}

// console.log(calculateCartPrice(5));  // 5
console.log(calculateCartPrice(200,400,100)); // 200 -> this   is a problem

*/
// ********** rest operator ************
/*
function calculateCartPrice(...num1) {

    return num1

}
console.log(calculateCartPrice(100,500,50,600));  // [ 100, 500, 50, 600 ]
*/
/*
function calculateCartPrice(val1, val2, ...num1) {

    return num1

}
console.log(calculateCartPrice(100,500,50,600));  // [ 50, 600 ]

*/

// ********** function and objects ***********
/*
const user = {
    username: "aslam2308",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);  
}

handleObject(user)  // username is aslam2308 and price is 199
*/

const user = {
    username: "aslam2308",
    prices: 199              // here change price to prices then 
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);  
}

handleObject(user)   // username is aslam2308 and price is undefined

















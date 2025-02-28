/*
if (true) {
    let num1 = 10
    const num2 = 20
    var num3 = 50 
}
// console.log(num1);           //gives error
// console.log(num2);         // gives error  
console.log(num3);           //  50 and that is problem beacuse num3 declare localy but it accessible globaly

*/

/*

function one() {
    const userName = "aslam2308"

    function two() {
        const website = "www.google.com"
        console.log(userName);    // accessible parent function variables  aslam2308
    }
    // console.log(website);  // not accesible outside scope 

    two()
    
}

one()
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(one(7)); // call one() function before define it successfully executes

function one(num) {

    return num +1
    
}


// console.log(anotherTwo(10)); not successfully executes
 
// const anotherTwo = function(num){
//     return num +1
// }
// this is basics scopes

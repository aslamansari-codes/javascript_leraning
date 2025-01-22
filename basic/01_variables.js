const accountId = 169500
let accountEmail = "demo@ggv.com"
var accountPassword = "Demo@2308"
accountCity = "Patna" //By default convert it var
let accountState; // // if you not assign any value in variables js shows the undefined after print it variable. 
// semicolon optional in js. 

/*accountId = 16950017 // Not allowed here because it define with const keyword
console.log(accountId);*/

accountEmail = "newdemo@ggv.com"
accountPassword = "new@2304"
accountCity = "Delhi"

console.table([accountEmail,accountPassword,accountCity,accountState]); //print the more than one variables data in tabular for

/*
Prefer not to use var because of issue in block scope and functional scope
*/


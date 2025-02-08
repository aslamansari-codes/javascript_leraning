// syntax 

let myArr = [0,2,8,6,1,5]   //  in js array resizable 
// console.log(typeof myArr);  //  object

// console.log(myArr[2]);  // 8

// let myHeros =  ["Saktiman","Nagraj","Balveer"]

// console.log(myHeros[0]);   // Saktiman

// Methods in arrays 

// myArr.push(10); // Add in the last position
// myArr.push(3)
// myArr.pop()

// myArr.unshift(11); // Add value in  starting point
// myArr.shift();   // Remove starting


// console.log(myArr.includes(11));  // if given value matched then gives output true otherwise false

// console.log(myArr.indexOf(9));   // if value mathched then return value index number otherwise return -1

// let newArray = myArr.join();  // convert the value in string

// console.log( typeof myArr);       // object
// console.log( typeof newArray);   // string

// ++++ Diffrence btween slice and splice

console.log("A", myArr);   // A [ 0, 2, 8, 6, 1, 5 ]

let myn1 = myArr.slice(1,3)  // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

console.log(myn1);  //  [ 2, 8 ]

console.log("B",myArr);  // B [ 0, 2, 8, 6, 1, 5 ]

let myn2 = myArr.splice(1,3)  // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(myn2);

console.log("C",myArr);















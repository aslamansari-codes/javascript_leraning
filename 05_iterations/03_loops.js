// ++++++++++ for of loops  ++++++++++

const myArray = [25,63,23,"raj",31]

for (const num of myArray) {
    // console.log(num);
    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if (greet ==" ") {
        continue
    }
    // console.log(`Each char is ${greet}`);
    
}


//  ++++++++++ Map  ++++++++++

const map = new Map()

map.set("IN", "India")
map.set("USA", "United State of America")
map.set("FR", "France")
map.set("IN", "India")

// console.log(map);

// ++++++++ output  ++++++++++
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United State of America',
  'FR' => 'France'
}
*/

for (const key of map) {
    // console.log(key);
    
}

// +++++++ output  ++++++++++++

/*

[ 'IN', 'India' ]
[ 'USA', 'United State of America' ]
[ 'FR', 'France' ]

*/

for (const [key, value] of map) {
    // console.log(key, ":-", value);
    
}

 // ++++  output +++++

 /*

IN :- India
USA :- United State of America
FR :- France


 */

const myObject = {
    game1: "Spiderman",
    game2: "Flash"
}
for (const [key, value] of myObject) {
    console.log(key, ":-", value);    // myObject is not iterable
}

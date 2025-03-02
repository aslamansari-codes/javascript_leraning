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
    console.log(`Each char is ${greet}`);
    
}
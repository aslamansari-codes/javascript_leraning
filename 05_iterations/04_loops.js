const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift of apple"
}

for (const key in myObject) {
    
    //console.log(key);
     
    }

// +++++++ output +++++++++
/*
js
cpp
rb
swift
*/

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
      
    }

// ++++++++  output  ++++++++++

/*
js shortcut is for Javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift of apple
*/

const programming = ["js","py","rb","java","cpp","c"]

for (const key in programming) {
   //console.log(key);
   
}

// ++++++++++  output +++++++++ 

/*
0
1
2
3
4
5
*/

for (const key in programming) {
   console.log(programming[key]);
   
}

// +++++++ output +++++++++

/*
js
py
rb
java
cpp
c
*/





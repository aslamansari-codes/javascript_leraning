const coding = ["Java","Python","Js","Ruby","CPP"]

coding.forEach( function (val){
    //console.log(val);
    
})

// ++++++++ output ++++++++++
/*
Java
Python
Js
Ruby
CPP
*/

coding.forEach(  (item) => {
    //console.log(item);  // gives the same output
})

// function printMe(item){
//     console.log(item);
// }

// coding.forEach( printMe)   // same output

coding.forEach(  (val, i, array) => {
    //console.log(val,i,array);
    
})

// ++++++++ output +++++++++

/*
Java 0 [ 'Java', 'Python', 'Js', 'Ruby', 'CPP' ]
Python 1 [ 'Java', 'Python', 'Js', 'Ruby', 'CPP' ]
Js 2 [ 'Java', 'Python', 'Js', 'Ruby', 'CPP' ]
Ruby 3 [ 'Java', 'Python', 'Js', 'Ruby', 'CPP' ]
CPP 4 [ 'Java', 'Python', 'Js', 'Ruby', 'CPP' ]
*/

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach(  (item) => {
    //console.log(item.languageName);
    
})

// +++++++++ output  ++++++++++

/*  
Javascript
Java
C++

*/

const values = coding.forEach(  (item)  => {
    return item
})

console.log(values);   // undefined => this  is lack







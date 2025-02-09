// const tindUser = new Object()

 const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// const regularUser = {
//     email: "aslamdevmth@chatgpt.com",
//     fullName: {
//         userFullName: {

//             firstName: "Aslam",
//             lastName: "Ansari"

//         }
//     }
// }

// console.log(regularUser.fullName.userFullName);  // { firstName: 'Aslam', lastName: 'Ansari' }

// combine or merge object

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj4 = Object.assign({}, obj1, obj2)

// console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj5 = {...obj1,...obj2}
// console.log(obj5);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const user =  [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id: 4,
        email: "d@gmail.com"
    }
    
    
]

// console.log(user[1].email);  //  b@gmail.com
// console.log();

// console.log(tinderUser);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser));  // [ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true
// console.log(tinderUser.hasOwnProperty('isLogged'));   //false

// De-structure in object

const course = {
    courseName: " Js in Hindi",
    price: 999,
    courseInstructor: "Aslam"
}

console.log(course.courseInstructor);  // Aslam

const {courseInstructor} = course
// console.log(courseInstructor);   // Aslam
 
const {courseInstructor: instructor} = course
// console.log(instructor);    // Aslam

// {
//     "name": "Aslam Ansari",
//     "courseName": "Js in Hindi",
//     "price": 0

// }

[
    {},
    {},
    {}
]





















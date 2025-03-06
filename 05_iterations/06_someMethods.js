const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =   myNums.filter(  (num) => num > 4)
//      or
// const newNums =   myNums.filter(  (num) => {
//     return num > 4
// }
// )
// console.log(newNums);  //[ 5, 6, 7, 8, 9, 10 ]

// same scenario used by for each loops
const newNums = []

myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums);   // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    {title: 'Book one',genre: 'Fiction', publish: '1981',
        edition: '2004'},
    {title: 'Book two',genre: 'Non-Fiction', publish: '1992',
        edition: '2008'},
    {title: 'Book three',genre: 'History', publish: '1999',
        edition: '2007'},
    {title: 'Book four',genre: 'Fiction', publish: '1988',
        edition: '2010'},
    {title: 'Book five',genre: 'Science', publish: '2009',
        edition: '2014'}
];

// const userBook = books.filter(  (bk) =>bk.genre === 'History')

// console.log(userBook);

// ++++++++ output +++++++++

/*
[
  {
    title: 'Book three',
    genre: 'History',
    publish: '1999',
    edition: '2007'
  }
]
*/

let userBook = books.filter(  (bk) => {
      return bk.publish >= 1947 && bk.genre === 'Fiction'

    })

console.log(userBook);

// +++++++++ output +++++++++

/*
[
  {
    title: 'Book one',
    genre: 'Fiction',
    publish: '1981',
    edition: '2004'
  },
  {
    title: 'Book four',
    genre: 'Fiction',
    publish: '1988',
    edition: '2010'
  }
]
*/








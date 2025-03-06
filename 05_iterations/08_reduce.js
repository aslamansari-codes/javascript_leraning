const myNums = [2,4,6,8,10]

// const initialValue = 0;

// const newNums = myNums.reduce(  (accumlator,currentvalue) => {
//     return accumlator + currentvalue + initialValue
// })

// console.log(newNums);  // 30

// how to add this 

/*
0+2+4+6+8+10 = 30 return

*/

// 2nd method 

// const myTotal = myNums.reduce(function (acc, currval) {
//     //console.log(`accumlator:- ${acc} and currentvalue:- ${currval}`);
//     return acc + currval
// }, 0 )

// console.log(myTotal);


//  ++++++ output ++++++  

/*
accumlator:- 0 and currentvalue:- 2
accumlator:- 2 and currentvalue:- 4
accumlator:- 6 and currentvalue:- 6
accumlator:- 12 and currentvalue:- 8
accumlator:- 20 and currentvalue:- 10
30
*/

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Py course",
        price: 999
    },
    {
        itemName: "Web Dev course",
        price: 4999
    },
    {
        itemName: "Mobile Dev course",
        price: 7999
    }
]

const priceToPay = shoppingCart.reduce( (acc, cuur) => acc + cuur.price,0)

console.log(priceToPay);

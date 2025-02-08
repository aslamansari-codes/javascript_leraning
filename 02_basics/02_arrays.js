const marvelHeros = [ "thor","Ironman","spiderman"]

const dcHeros = ["spuerman","flash","batman"]

// marvelHeros.push(dcHeros); 

// console.log(marvelHeros);  // [ 'thor', 'Ironman', 'spiderman', [ 'spuerman', 'flash', 'batman' ] ]

// console.log(marvelHeros[3][1]);  // flash

console.log(marvelHeros.concat(dcHeros));  // [ 'thor', 'Ironman', 'spiderman', 'spuerman', 'flash', 'batman' ]

let myCombineArray = marvelHeros.concat(dcHeros);
console.log(myCombineArray);
console.log(myCombineArray[5]);  // batman









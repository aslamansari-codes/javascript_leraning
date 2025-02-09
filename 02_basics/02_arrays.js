// const marvelHeros = [ "thor","Ironman","spiderman"]

// const dcHeros = ["spuerman","flash","batman"]

// marvelHeros.push(dcHeros); 

// console.log(marvelHeros);  // [ 'thor', 'Ironman', 'spiderman', [ 'spuerman', 'flash', 'batman' ] ]

// console.log(marvelHeros[3][1]);  // flash

//console.log(marvelHeros.concat(dcHeros));  // [ 'thor', 'Ironman', 'spiderman', 'spuerman', 'flash', 'batman' ]

// let myCombineArray = marvelHeros.concat(dcHeros);
// console.log(myCombineArray);
// console.log(myCombineArray[5]);  // batman

//++++++++++ spread ++++++++++++++++++++

// const all_newHeros = [...marvelHeros,...dcHeros]
// console.log(all_newHeros);  // [ 'thor', 'Ironman', 'spiderman', 'spuerman', 'flash', 'batman' ]

// const another_arrays = [1,2,3,[5,6,[1,2,8,[6,7]]]]  // this is complex
// // for simplifying above array 
// console.log(another_arrays);

// const real_another_arrays = another_arrays.flat(Infinity)  // infinity -> means how many depth you can spread it.

// console.log(real_another_arrays);

// console.log(Array.isArray("Aslam Ansari"));  // check the value is array or not
// console.log(Array.from("Aslam Ansari"));  // convert any type value in array 
// output
/*
[
    'A', 's', 'l', 'a',
    'm', ' ', 'A', 'n',
    's', 'a', 'r', 'i'
  ]*/

//  console.log(Array.from({name: "Aslam"}));  // [] interesting here function confuse 

 const score1 = 100
 const score2 = 200
 const score3 = 500
 const score4 = 150

 console.log(Array.of(score1, score2, score3, score4));  // similar function  [ 100, 200, 500, 150 ]

 
 

    


















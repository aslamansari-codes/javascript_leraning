// Imediately Invoked Functions Expressions (IIFE)

(function myFun(){
    console.log(`DB CONNECTED`);  // DB CONNECTED
})();  // semicolon must for ending the line


((name) => {
    console.log(`DB CONNCETED TWO ${name}`);
    
})('Aslam')   // DB CONNCETED TWO Aslam


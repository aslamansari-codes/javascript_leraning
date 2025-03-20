const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

 const heights = parseInt(document.querySelector('#height').value);
 const  weights = parseInt(document.querySelector('#weight').value);
 const results = document.querySelector('#results');
 const display = document.querySelector('.display');


 if(heights === '' || height < 0 || isNaN(heights)){
    results.innerHTML = `Please enter vaild height ${heights}`
 }
 else if(weights === '' || weights < 0 || isNaN(weights)){
    results.innerHTML = `Please enter vaild weight ${weights}`
 }else{
  const  bmi = (weights/((heights*heights)/1000)).toFixed(2);

   // show the result 
   results.innerHTML = `<span>${bmi}</span>`

   if(bmi < 18.6){
    
    display.innerHTML =`<span>You are under weight</span>`
    
 }
 else if (bmi >=18.6 && bmi < 24.9){
    
   display.innerHTML =`<span>You are normal weight</span>`;
   
 }
 else if (bmi >=24.9){
    display.innerHTML= `<span>You are normal weight</span>`
   
 }
 }
 
})
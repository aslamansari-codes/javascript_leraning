# projects related to DOM

# solution code

### project1

```javascript

const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {

        // if(e.target.id == 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id == 'white'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id == 'blue'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id == 'yellow'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id == 'pink'){
        //     body.style.backgroundColor = e.target.id;
        // }

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'pink':
                body.style.backgroundColor = e.target.id;
                break;

            default:
                body.style.backgroundColor = 'red';
                break;
        }

    })

})


```

### project2
```javascript
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
```

### project3 solution
```javascript

const clock = document.querySelector('#clock');



setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


### project4 solution
```javascript

let randomNumber = parseInt(Math.random() *100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi =document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p  = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please gives the valid number`);
    }else if(guess<1){
        alert(`Please Enter a number greater than 1`);
    }
    else if(guess>100){
        alert(`Please Enter a number less than 100`);
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over!, Random number was ${randomNumber}`);
            endGame();
        }else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
    }else if(guess<randomNumber){
        displayMessage(`Number is too low`);
    }
    else if(guess>randomNumber){
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess){
    userInput.value = ' ';
    guessSlot.innerHTML +=`${guess},`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML =`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ' ';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame(){

    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() *100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })


}


```

### project5

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});



```

### project6 

```javascript


let randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }return color
}
let intervalId;
function startChanginColor(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000)
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}
function stopChanginColor(){
  clearInterval(intervalId)
  intervalId = null;
}
document.querySelector('#start').addEventListener('click',startChanginColor)
document.querySelector('#stop').addEventListener('click',stopChanginColor)





```
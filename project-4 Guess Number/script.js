
var randomNumber=parseInt((Math.random()*100)+1);

const userInput= document.querySelector("#guessField")
const prevGuesses= document.querySelector(".guesses")
const guessesLeft= document.querySelector(".lastResult")
const lowOrHi= document.querySelector(".lowOrHi")
const submitBtn= document.querySelector("#subt")

const resultPara= document.querySelector(".resultParas")

const p = document.createElement("p")

let guessArray=[]
let guessUsed=1;

let playGame=true;
if(playGame){
    submitBtn.addEventListener("click", function(e){
        e.preventDefault();
        const guess =parseInt(userInput.value);
        validateGuess(guess);
    })
}


function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        alert("Please enter a valid number between 1 and 100");
    }
    else{
        guessArray.push(guess);
        if(guessUsed===11){
            displayGuess(guess);
            displayMessage(`Game Over! The  random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`Congratulations! You guessed it right`);
        endGame();
    }
    else if(guess>randomNumber&&(guess-randomNumber)>30){
        displayMessage(`Your guess is TOO high!`);

    }
    else if(guess>randomNumber&&(guess-randomNumber)<10){
        displayMessage(`Your guess is high, but you are very close!`);
    }
    else if(guess>randomNumber){
        displayMessage(`Your guess is high!`);
    }
   
    else if(guess<randomNumber&&(randomNumber-guess)>30){
        displayMessage(`Your guess is TOO low!`);

    }
    else if(guess<randomNumber&&(randomNumber-guess)<10){
        displayMessage(`Your guess is low, but you are very close!`);
    }
    else if(guess<randomNumber){
        displayMessage(`Your guess is low!`);
    }
}


function displayGuess(guess){
    userInput.value="";
    prevGuesses.innerHTML+=`${guess} `;
    guessUsed++;
    guessesLeft.innerHTML=` ${11-guessUsed}`;
    
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h1>${message}</h1>`;
}
function endGame(guess){
    userInput.value="";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    resultPara.appendChild(p);
    playGame=false;
    newGame(guess);
}
function newGame(guess){
    const newGameBtn=document.querySelector("#newGame");
    newGameBtn.addEventListener("click", function(){
        randomNumber=parseInt((Math.random()*100)+1);
        guessArray=[];
        prevGuesses.innerHTML="";
        guessUsed=1;
        guessesLeft.innerHTML=`10`;
        userInput.removeAttribute("disabled");

        resultPara.removeChild(p);

        playGame=true;

    
    })
 
}
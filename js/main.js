/*----- constants -----*/
const words = ['helmet', 'neptune', 'saturn', 'spaceship', 
'planet', 'alien', 'rocket', 'astronaunt', 'galaxy', 'satellite', 'earth', 'universe', 'constellations'];
const maxGuesses = 7;

/*----- app's state (variables) -----*/
let random = words[Math.floor(Math.random() * words.length)];
let randomWord = random
let answerArr = [];
let wrong = [];
answerArr = new Array(randomWord.length).fill('_');


/*----- cached element references -----*/
const reset = document.getElementById('reset');
const submit = document.getElementById('submit');
const msg = document.getElementById('msg');
const displayResults = document.querySelector('h1');
const inp = document.querySelector('input');

/*----- event listeners -----*/
reset.addEventListener('click', init);
submit.addEventListener('click', submitGuess);

/*----- functions -----*/
init();


function init() {
    reset.style.visibility = 'hidden';
   let answerArr = [];
   let wrong = [];  
}

function render() {
    let lowCasing = inp.value.toLowerCase();
    if (lowCasing.length > 1) {
        msg.textConent = `Please enter a single letter`;
    } else if(wrong.includes(lowCasing)) {
        msg.textContent = `You have already guessed that letter`;
    } else if(randomWord.includes(lowCasing)) {
        msg.textContent = `Correct!`;
    } else if(!randomWord.includes(lowCasing)) {
        msg.textContent = 'Wrong!';
    } else {
        msg.textContent = `Invalid, Please enter a letter`;
    }
    let winner = getWinner();
     };


function submitGuess() {
    let lowCasing = inp.value.toLowerCase();
    for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === lowCasing) {
            answerArr[j] = lowCasing;
            displayResults.textContent = answerArr.join(' ');
        } 
    }
        render();
        inp.value = '';  
    };
    
    

function getWinner() {
    if ((answerArr.includes('_')) && (wrong.length <= 7)) {
    return;
    } else { 
    msg.textContent = `You win the answer was ${randomWord}`;
        }
        reset.style.visibility = 'visible';
    }

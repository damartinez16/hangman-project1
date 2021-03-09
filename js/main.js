/*----- constants -----*/
const words = ['helmet', 'neptune', 'saturn', 'spaceship', 
'planet', 'alien', 'rocket', 'astronaut', 'galaxy', 'satellite', 'earth', 'universe', 'constellations'];

/*----- app's state (variables) -----*/
let random = words[Math.floor(Math.random() * words.length)];
let randomWord = random
let answerArr = [];
let wrong = [];
answerArr = new Array(randomWord.length).fill('_');
let maxGuesses = 6;


/*----- cached element references -----*/
const reset = document.getElementById('reset');
const submit = document.getElementById('submit');
const msg = document.getElementById('msg');
const displayResults = document.querySelector('h1');
const inp = document.querySelector('input');
const guesses = document.querySelector('nav');

/*----- event listeners -----*/
reset.addEventListener('click', init);
submit.addEventListener('click', submitGuess);
document.addEventListener('keydown', init);

/*----- functions -----*/

init();


function init() {
    let wrong = []; 
    let randomWord = random;
    let answerArr = new Array(randomWord.length).fill('_');
    guesses.textContent = `Guesses remaining: ${maxGuesses}`;
    render(); 
};



function render() {  
    let answerArr = new Array(randomWord.length).fill('_');
    let lowCaseInp = inp.value.toLowerCase();
    if (inp.value.length > 1) {
        msg.textConent = `Please enter a single letter`;
    } else if(wrong.includes(lowCaseInp)) {
        msg.textContent = `You have already guessed that letter`;
    } else if (lowCaseInp === '') {
        msg.textConent = `Please enter a letter`
    } else if(randomWord.includes(lowCaseInp)) {
        msg.textContent = `Correct!`;
    } else if(!randomWord.includes(lowCaseInp)) {
        wrong.push(lowCaseInp);
        msg.textContent = 'Wrong!';
        maxGuesses--;
        guesses.textContent = `Guesses remaining: ${maxGuesses}`;
    } else {
        msg.textContent = `Invalid, Please enter a letter`;
    }
    reset.style.visibility = 'hidden';
     getWinner();
    };



function submitGuess() {
    let lowCaseInp = inp.value.toLowerCase();
    for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === lowCaseInp) {
            answerArr[j] = lowCaseInp;
            displayResults.textContent = answerArr.join(' ');
        } 
    }
        render();
        inp.value = '';  
};
    
    

function getWinner() {
   
    if ((!answerArr.includes('_')) && (wrong.length <= 5)) {
        msg.textContent = `You win the answer was `
        reset.style.visibility = 'visible';
    } else if (answerArr.includes('_') && (wrong.length > 5)) { 
        msg.textContent = `Oh no you ran out of guesses. The correct answer was ${randomWord}`;
        reset.style.visibility = 'visible';
        } 
        
};

let myAudio =  document.querySelector('#laser');
submit.addEventListener('click', ()=> {
    myAudio.play();
});


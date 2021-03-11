
const words = ['helmet', 'neptune', 'saturn', 'spaceship', 
'planet', 'alien', 'rocket', 'astronaut', 'galaxy', 'satellite',
'earth', 'universe', 'constellations', 'nebula', 'venus', 'jupiter',
'asteroid', 'kepler', 'meteor', 'supernova', 'mercury', 'mars', 'uranus', 
'aquarius', 'aries', 'cancer', 'capricorn', 'cassiopeia', 'gemini', 'leo', 
'libra', 'orion', 'pisces', 'sagittarius', 'scorpio', 'taurus', 'astronomy',
'aerospace', 'rover', 'pathfinder', 'stars', 'pluto', 'comet', 'lunar', 
'eclipse', 'solstice', 'orbit', 'zodiac', 'crater','telescope', 'gravity', 
'starlight','zodiac','cosmos', 'aurora', 'corona', 'extraterrestrial'];


let randomWord = words[Math.floor(Math.random() * words.length)];
let wrong = [];
let answerArr;
let maxGuesses = 6;


const reset = document.getElementById('reset');
const submit = document.getElementById('submit');
const msg = document.getElementById('msg');
const displayResults = document.querySelector('h1');
const inp = document.querySelector('input');
const guesses = document.querySelector('nav');


reset.addEventListener('click', init);
submit.addEventListener('click', submitGuess);


init();

function init() {
    maxGuesses = 6;
    wrong = []; 
    randomWord = words[Math.floor(Math.random() * words.length)];
    answerArr = new Array(randomWord.length).fill('_');
    reset.style.visibility = 'hidden';
    render();
};

function render() {  
    let lowCaseInp = inp.value.toLowerCase();
     if(inp.value === ('')) {
        msg.textContent = `Enter a letter below`;
    } else if (wrong.includes(lowCaseInp)) {
        msg.textContent = `You have already guessed that letter`;
    } else if (lowCaseInp.length > 1) {
        msg.textContent = `Please enter a single letter`;
    } else if(randomWord.includes(lowCaseInp)) {
        msg.textContent = `Correct!`;
    } else if(!randomWord.includes(lowCaseInp) && (isNaN(inp.value))) {
        wrong.push(lowCaseInp);
        msg.textContent = 'Wrong!';
        maxGuesses--;
        guesses.textContent = `Guesses remaining: ${maxGuesses}`;
    } else {
        msg.textContent = `Invalid, Please enter a letter`;
    }
    displayResults.textContent = answerArr.join(' ');
    getWinner();
    guesses.textContent = `Guesses remaining: ${maxGuesses}`;
    };

function submitGuess() { 
    let lowCaseInp = inp.value.toLowerCase();
    for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === lowCaseInp) {
            answerArr[j] = lowCaseInp;
        } 
    }
        render();
        inp.value = '';  
};
    
function getWinner() {
    if ((!answerArr.includes('_')) && (wrong.length <= 5)) {
        msg.textContent = `You win! The answer was `
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

    inp.addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {
             event.preventDefault();
            submit.click();
        }
    });

/*----- constants -----*/
const words = ['helmet', 'neptune', 'saturn', 'spaceship', 
'planet', 'alien', 'rocket', 'astronaunt', 'galaxy', 'satellite', 'earth', 'universe', 'constellations'];
const maxGuesses = 7;

/*----- app's state (variables) -----*/
let random = words[Math.floor(Math.random() * words.length)];
let randomWord = random
let answerArr = [];
let wrong = [];


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

   let answerArr = [];
   let wrong = []; 
}

 

 
for (let i =0; i < randomWord.length; i ++) {
    answerArr[i] ='_';
}



    function submitGuess() {
        let lowCasing = inp.value.toLowerCase();
        for (let i =0; i < randomWord.length; i ++) {
            answerArr[i] ='_';
        }
        for (let j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === inp.value) {
                answerArr[j] = inp.value;
                displayResults.textContent = answerArr.join(' ');
            }
            
        }
        inp.value = '';
        
       // if ((inp.value !== randomWord[i]) && (wrong.length <= 7)) {
       //     wrong.push(inp.value);
       // } else if (inp.value === randomWord[i]) {
       //     answerArr.push(inp.value);
       //     }
           render();
       };

    

function render() {
   if (inp.value.length !== 1) {
       msg.textConent = `Please enter a single letter`;
   } else if(inp.value === wrong) {
       msg.textContent = `You have already guessed that letter`;
   } else {
       msg.textContent = `Invalid, Please enter a letter`;
   }
  
    };


    



function getWinner() {
    if ((answerArr.includes('_')) && (wrong.length <= 7)) {
    return;
    } else { 
    msg.textContent = `You win the answer was ${randomWord.join('')}`;
        }
    }

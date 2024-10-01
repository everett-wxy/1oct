let score = 0; 
let computerChoice = ""; 
let playerChoice = ""; 
let results = ""; 

const choices = ['Scissors', 'Paper', 'Stone'];
const scoreElement = document.querySelector('#score');
const resultsElement = document.querySelector('#result');

const compareChoices = () => {
    let message = "";
    if (playerChoice === computerChoice) {
        message = 'You both tied.';
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
        message = 'You won.';
    } else if (playerChoice === 'Paper' && computerChoice === 'Stone'){
        message = 'You won.';
    } else if (playerChoice === 'Stone' && computerChoice === 'Scissors'){
        message = 'You won.';
    } else {
        message = 'You lost.';
    }
    printResults(message);

};

const printResults = (message) => {
    const results = `You choose ${playerChoice} and computer chose ${computerChoice}. ` + message;
    resultsElement.innerText = results; 

}

const getComputerSelection = () => {
    const idx = Math.floor(Math.random() * choices.length);
    computerChoice = choices[idx];
};

const getButtonCLick = (event) => {
    playerChoice = event.target.id;
}; 

const playGame = (event) => {
    getButtonCLick(event);
    getComputerSelection();
    compareChoices();
}

document.querySelector('#buttons').addEventListener('click', playGame);

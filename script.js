// alert("welcome. this is R.P.S. (rock paper scissors) enter your username in the box and press enter, then start the game. simply choose rock paper or scissors and the computer will make it's move once you do. the computer's choice will be displayed alongside the verdict. to restart, click the restart button (refreshes the whole page for simplicity's sake)");

//create an event listener for the submit button for it to, on click, remove the field and replace it with a welcome message and then display the rest of the page(?)
let submit = document.getElementById("submit");
let namebox = document.getElementById("player");
let reset = document.getElementById("clear");
let results = document.getElementById("results");

// let decide = document.getElementById("decision");

let playerScore = 0;
let computerScore = 0;
let choices = ["rock","paper", "scissors"];
// let message = document.getElementById("welcome");

// decide.addEventListener('click', choice);
submit.addEventListener('click', welcome);
reset.addEventListener('click', refresh);

function getComputerChoice(){
  let index = Math.floor(Math.random() * choices.length); 
  results.innerHTML =  choices[index];
}

function playRound(playerChoice){
  console.log("Playing Round" + playerChoice);
}

document.getElementById("rock").addEventListener('click', function () { playRound("Rock"); });
document.getElementById("paper").addEventListener('click', function () { playRound("paper"); });
document.getElementById("scissors").addEventListener('click', function () { playRound("scissors"); });

function determineWinner(pc,cc){
if(pc == "scissors" && cc == "paper"){
  updateScore("player");
  results.innerHTML = "YOU WIN"
}
else if(pc == "paper" && cc == "rock"){
    updateScore("player");
  results.innerHTML =  "YOU WIN"
}
else if(pc == "rock" && cc == "scissors"){
    updateScore("player");
  results.innerHTML =  "YOU WIN"
}
else if(pc == "rock" && cc == "paper"){
    updateScore("computer");
  results.innerHTML =  "YOU LOSE"
}
else if(pc == "scissors" && cc == "rock"){
    updateScore("computer");
  results.innerHTML =  "YOU LOSE"
}
else if(pc == "paper" && cc == "scissors"){
    updateScore("computer");
  results.innerHTML =  "YOU LOSE"
}
else {
results.innerHTML =  "TIE";
}
}

function updateScore(roundResult){
if(roundResult == "player"){
  playerScore+=1;
}
else if(roundResult == "computer" ) {
  computerScore+=1;
}
else {
  console.log("it was a tie")
}
}

function updateDisplay(){
  determineWinner();
  updateScore();
}

// let compDecisions = ["rock","paper","scissors"] man i dont know

// function choice(){
//   i dont know how to get this to work
//     if (document.getElementsByClassName("rock").onclick) {
//     document.getElementById("userChoice").value = "ROCK";
//     current = "o";
//   } else if (document.getElementsByClassName("paper").onclick) {
//     document.getElementById("userChoice").value = "PAPER";
//     current = "o";
//   } else if (document.getElementsByClassName("scissors").onclick) {
//     document.getElementById("userChoice").value = "SCISSORS";
//     current = "o";
//   }
// }

function welcome(){
    document.getElementById("message").innerText = ("WELCOME TO THE GAME, MANAGER " + namebox.value.toUpperCase() + ".");
}

  function refresh(){
    window.location.reload();
  }
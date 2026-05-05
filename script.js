alert("welcome. this is R.P.S. (rock paper scissors) enter your username in the box and press enter, then start the game. simply choose rock paper or scissors and the computer will make it's move once you do. the computer's choice will be displayed alongside the verdict. to restart, click the restart button (refreshes the whole page for simplicity's sake)");

//create an event listener for the submit button for it to, on click, remove the field and replace it with a welcome message and then display the rest of the page(?)
let submit = document.getElementById("submit");
let namebox = document.getElementById("player");

let decide = document.getElementById("decision");
// let message = document.getElementById("welcome");

decide.addEventListener('click', choice);
submit.addEventListener('click', welcome);

// let compDecisions = ["rock","paper","scissors"] man i dont know

function choice(){
    //i dont know how to get this to work
    if (document.getElementsByClassName("rock").onclick) {
    document.getElementById("userChoice").value = "ROCK";
    current = "o";
  } else if (document.getElementsByClassName("paper").onclick) {
    document.getElementById("userChoice").value = "PAPER";
    current = "o";
  } else if (document.getElementsByClassName("scissors").onclick) {
    document.getElementById("userChoice").value = "SCISSORS";
    current = "o";
  }
}

function welcome(){
    document.getElementById("message").innerText = ("WELCOME TO THE GAME, MANAGER " + namebox.value.toUpperCase() + ".");
}


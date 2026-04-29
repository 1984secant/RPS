//create an event listener for the submit button for it to, on click, remove the field and replace it with a welcome message and then display the rest of the page(?)
let submit = document.getElementById("submit");
let namebox = document.getElementById("player");

let decide = document.getElementById("decision");
let message = document.getElementById("welcome");

decide.addEventListener('click', send);
submit.addEventListener('click', welcome);

let compDecisions = ["rock","paper","scissors"]
function send(){
    //unknown
}

function welcome(){
    message.innerHTML = ("WELCOME TO THE GAME, " + namebox.value);
}
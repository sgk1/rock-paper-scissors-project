// javascript code goes here


let h2 = document.createElement("h2");
h2.textContent = "Rock Paper Scissors Game";
h2.classList.add("main-heading");

document.body.prepend(h2);

let para = document.createElement("p");
para.classList.add("options-para");
para.textContent = "Choose your option: ";

let rock_btn = document.createElement("button");
rock_btn.textContent = "Rock";
let paper_btn = document.createElement("button");
paper_btn.textContent = "Paper";
let scissors_btn = document.createElement("button");
scissors_btn.textContent = "Scissors";
let restart_btn = document.createElement("button");
restart_btn.textContent = "Restart Game";

let div = document.querySelector("div");

let result=document.createElement("p");
result.classList.add("result-display");
result.textContent="Result will be displayed here";

div.appendChild(result);
div.appendChild(para);
para.appendChild(rock_btn);
para.appendChild(paper_btn);
para.appendChild(scissors_btn);
para.appendChild(restart_btn);
restart_btn.disabled = true;
restart_btn.addEventListener("click", () => {
    rock_btn.disabled = false;
    paper_btn.disabled = false;
    scissors_btn.disabled = false;
    humanScore = 0;
    computerScore = 0;
    result.textContent = "Game restarted! Result will be displayed here";
});

let computerSelection;
let humanSelection;
let humanScore = 0;
let computerScore = 0;

rock_btn.addEventListener("click", () => {
    humanSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
});

paper_btn.addEventListener("click", () => {
    humanSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
});

scissors_btn.addEventListener("click", () => {
    humanSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
});



function getComputerChoice() {
    const a =Math.floor(Math.random()*100);
    if (a<33) {
        console.log("Computer choice is: rock")
        return "rock";
    } 
    else if (a>=33 && a<66) {
        console.log("Computer choice is: paper")
        return "paper";
    } 
    else if (a<100) {
        console.log("Computer choice is: scissors")
        return "scissors";
    }
}

function playRound (humanChoice,computerChoice)
    {
        if (humanChoice == "rock" && computerChoice =="paper" )
        {
            computerScore++;
            result.textContent = "";
            result.textContent =  `You lose!Paper beats Rock. Computer Score: ${computerScore} Human Score: ${humanScore}`;
            if (computerScore == 5 || humanScore == 5) {
                endGame();
                return;
            }
            
        } else if (humanChoice == "rock" && computerChoice =="scissors" )
        {
            
            humanScore++;
            result.textContent = "";
            result.textContent =  `You win!Rock beats Scissors. Computer Score: ${computerScore} Human Score: ${humanScore}`;
            if (computerScore == 5 || humanScore == 5) {
                endGame();
                return;
            }
        } else if (humanChoice == "paper" && computerChoice =="rock" )
        {
            humanScore++;
            result.textContent = "";
            result.textContent =  `You win!Paper beats Rock. Computer Score: ${computerScore} Human Score: ${humanScore}`;
            if (computerScore == 5 || humanScore == 5) {
                endGame();
                return;
            }
        } else if (humanChoice == "paper" && computerChoice =="scissors" )
        {
            computerScore++;
            result.textContent = "";
            result.textContent =  `You lose!Scissors beats Paper. Computer Score: ${computerScore} Human Score: ${humanScore}`;
            if (computerScore == 5 || humanScore == 5) {
                endGame();
                return;
            }
        } else if (humanChoice == "scissors" && computerChoice =="rock" )
        {
            
            computerScore++;
            result.textContent = "";
            result.textContent =  `You lose!Rock beats Scissors. Computer Score: ${computerScore} Human Score: ${humanScore}`;
            if (computerScore == 5 || humanScore == 5) {
                endGame();
                return;
            }
        } else if (humanChoice == "scissors" && computerChoice =="paper" )
        {
            humanScore++;
            result.textContent = "";
            result.textContent =  `You win!Scissors beats Paper. Computer Score: ${computerScore} Human Score: ${humanScore}`;
            if (computerScore == 5 || humanScore == 5) {
                endGame();
                return;
            }
        } else {
            result.textContent = "";
            result.textContent =  `It is a draw! Computer Score: ${computerScore} Human Score: ${humanScore}`;
        }
    }


function endGame() {
    if (humanScore > computerScore) {
        result.textContent = `Game Over! You won the game! Final Score - Computer: ${computerScore} Human: ${humanScore}`;
    } else {
        result.textContent = `Game Over! Computer won the game! Final Score - Computer: ${computerScore} Human: ${humanScore}`;
    }
    //disable buttons
    rock_btn.disabled = true;
    paper_btn.disabled = true;
    scissors_btn.disabled = true;
    restart_btn.disabled = false;
} 










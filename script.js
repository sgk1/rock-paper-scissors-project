// javascript code goes here


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


function getHumanChoice() {
    const input = prompt("Type your choice: rock, paper or scissors?");
    console.log(`User input is: ${input}`);
    const humanSelection = input.toLowerCase();
    return humanSelection;
}


function playGame (noOfRoundsPlayed) {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i< rounds;i++) {
    //getHumanChoice();
    //getComputerChoice();
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection,computerSelection);
}

console.log(`Final computerScore is ${computerScore}`);
console.log(`Final humanScore is ${humanScore}`);
console.log(computerScore>humanScore?"Computer wins overall!":humanScore>computerScore?"You win overall!":"It is a draw overall");

    function playRound (humanChoice,computerChoice)
    {
        if (humanChoice == "rock" && computerChoice =="paper" )
        {
            console.log ("You lose!Paper beats Rock.")
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice =="scissors" )
        {
            console.log ("You win!Rock beats Scissors.")
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice =="rock" )
        {
            console.log ("You win!Paper beats Rock.")
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice =="scissors" )
        {
            console.log ("You lose!Scissors beats paper.")
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice =="rock" )
        {
            console.log ("You lose!Rock beats Scissors.")
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice =="paper" )
        {
            console.log ("You win!Scissors beats Paper.")
            humanScore++;
        } else {
            console.log ("It is a draw!")
        }
    }


    

}


let computerSelection;
let humanSelection;


function noOfRounds () {
    const input = prompt ("How many rounds you want to play with computer?","Enter a number");
    const rounds = Number(input);
    return rounds;

}

const rounds = noOfRounds();

playGame(rounds);


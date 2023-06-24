let botScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1){
        return "rock";
    }
    else if (randomNumber == 2){
        return "paper";
    }
    else return "scissors";
}
function roundPlay(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose, paper beats rock!";
    }
    else if (playerSelection == "rock" && computerSelection == "rock"){
        return "Its a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win, rock beats scissors!";
    }
    else if (playerSelection == "paper" && computerSelection == "paper"){
        return "Its a tie!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win, paper beats rock!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose, scissors beats paper!";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return "Its a tie!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win, scissors beats paper!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose, rock beats scissors!";
    }
}
function submitAnswer(event) {
    let answer = event;
    let get = roundPlay(answer , getComputerChoice());
    document.getElementById("result").innerHTML = get;
    if (get.includes("win")){
        humanScore++;
        document.getElementById("human-score").innerHTML = "Human score: " + humanScore;
    }
    else if (get.includes("lose")){
        botScore++;
        document.getElementById("bot-score").innerHTML = "Bot score: " + botScore;
    }
    if (humanScore == 5 || botScore == 5){
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById('your-div-id').classList.remove('')

        if (humanScore == 5){
            document.getElementById("result").innerHTML = "The human has won the game!";
        }
        else {
            document.getElementById("result").innerHTML = "The bot has won the game!";
        }
    }
}


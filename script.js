const Outcomes = ['rock','paper','scissors'];
function computerSelection(){
    let random = Math.floor(Math.random() * Outcomes.length);
    let result = Outcomes[random];
    return result;
}
//let computerChoice = computerSelection();
function playerSelection(){
    while(true){
    let playerChoice = prompt("Please select rock paper or scissors");
    let choice = playerChoice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice =="scissors"){
        return choice;
    }
    else{
        alert("Wrong selection, please type exactly rock or paper or scissors");
    }
}
}
//let playerChoice = playerSelection();


function round(){
    let comupterWins = 0;
    let playerWins = 0;
    for(let rounds =1; rounds <= 5; rounds++){
        let computer = computerSelection();
        let player= playerSelection();
        console.log("Round " + rounds);
        console.log('Computer chose: ' + computer);
        console.log('Player chose: ' + player);

        if (computer == player){
            console.log("Draw")
        } else if((computer =='rock' && player =='scissors') ||(computer =='paper' && player =='rock') || (computer =='scissors' && player =='paper')){
            console.log("Computer won this round");
            comupterWins += 1;
        }else{
            console.log("You won this round");
            playerWins += 1;
        }
        console.log(`Current standings: Computer ${comupterWins}, Player ${playerWins} `);
        
    }
    if (comupterWins == playerWins){
            console.log(`There was a draw with a score: computer ${comupterWins} player ${playerWins}`);
        } else if(comupterWins > playerWins){
            console.log(`Computer won with a score: computer ${comupterWins} player ${playerWins}`);
        } else{
            console.log(`You won with a score: computer ${comupterWins} player ${playerWins} `);
        }
}

round();

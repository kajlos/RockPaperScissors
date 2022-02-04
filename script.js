const Outcomes = ['rock','paper','scissors'];
function computerSelection(){                   
    let random = Math.floor(Math.random() * Outcomes.length);
    let result = Outcomes[random];
    return result;
}

// function playerSelection(){
//     while(true){
//     let playerChoice = prompt("Please select rock paper or scissors");
//     let choice = playerChoice.toLowerCase();
//     if (choice == "rock" || choice == "paper" || choice =="scissors"){
//         return choice;
//     }
//     else{
//         alert("Wrong selection, please type exactly rock or paper or scissors");
//     }
// }
// }
//let playerChoice = playerSelection();

let rounds=0;   
let comupterWins = 0;
let playerWins = 0;
function round(player){
    let scores = document.querySelector('.score');
    let result = document.querySelector('.result');
    let whoWon = document.querySelector('.whoWon');
    let choice = document.querySelector('.choice');
    whoWon.textContent = '';
    let computer = computerSelection();   
    choice.textContent = `Computer chose: ${computer}, you chose ${player}. `
        if (computer == player){
            scores.textContent="Draw";
            result.textContent=`Current standings: Computer ${comupterWins} - ${playerWins} Player`;
        } else if((computer =='rock' && player =='scissors') ||(computer =='paper' && player =='rock') || (computer =='scissors' && player =='paper')){
            scores.textContent="Computer won this round";
            comupterWins += 1;
            result.textContent=`Current standings: Computer ${comupterWins} - ${playerWins} Player`;
            
        }else{
            scores.textContent="You won this round";
            playerWins += 1;
            result.textContent=`Current standings: Computer ${comupterWins} - ${playerWins} Player`;
            
        }
        if(comupterWins == 5 || playerWins == 5){
            if(comupterWins > playerWins){
            whoWon.textContent=`Computer won the game!`;
            comupterWins=0;
            playerWins=0;
        } else{
            whoWon.textContent=`You won the game`;
            comupterWins=0;
            playerWins=0;
        } 
        }

        rounds++;
}



let button = document.querySelectorAll('button');
button.forEach(b => {
    b.addEventListener('click',()=>{
        round(b.id);
    })
});
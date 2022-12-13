// Wait for the page to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the buttons
    const rockButton = document.querySelector('#Rock');
    const paperButton = document.querySelector('#Paper');
    const scissorsButton = document.querySelector('#Scissors');
    const scoreElement = document.querySelector('.Score');

    
    

  
// Add event listeners to the buttons
rockButton.addEventListener('click', () => {

    if (roundCount>=5){
        document.querySelector('#reset').style.display = 'block';
        var newHeader = document.createElement('h1');
        newHeader.textContent = `${getWinner(playerWins,computerWins)} Wins!`;
        scoreElement.appendChild(newHeader);
        document.querySelector('#Rock').style.display = 'none';
        document.querySelector('#Paper').style.display = 'none';
        document.querySelector('#Scissors').style.display = 'none';
  
         
    }
    else {
        let result = playRound('Rock', getComputerChoice());

    // If the result is not undefined (i.e., if there was no tie),
    // update the score
    if (result !== undefined) {
        console.log(roundCount);
        scoreElement.innerHTML = `<h1>Player ${playerWins} Computer ${computerWins}</h1>`;
    }
        
    }
    
})

paperButton.addEventListener('click', () => {
    if (roundCount>=5){
        document.querySelector('#reset').style.display = 'block';
        var newHeader = document.createElement('h1');
        newHeader.textContent = `${getWinner(playerWins,computerWins)} Wins!`;
        scoreElement.appendChild(newHeader);
        document.querySelector('#Rock').style.display = 'none';
        document.querySelector('#Paper').style.display = 'none';
        document.querySelector('#Scissors').style.display = 'none';
  
         
    } else {
        let result = playRound('Paper', getComputerChoice());

    if (result !== undefined) {
        console.log(roundCount);
        scoreElement.innerHTML = `<h1>Player ${playerWins} Computer ${computerWins}</h1>`;
    }}

});

scissorsButton.addEventListener('click', () => {
    if (roundCount>=5){
        document.querySelector('#reset').style.display = 'block';
        var newHeader = document.createElement('h1');
        newHeader.textContent = `${getWinner(playerWins,computerWins)} Wins!`;
        scoreElement.appendChild(newHeader);
        document.querySelector('#Rock').style.display = 'none';
        document.querySelector('#Paper').style.display = 'none';
        document.querySelector('#Scissors').style.display = 'none';
  
         
    } else {
        let result = playRound('Scissors', getComputerChoice());

        // If the result is not undefined (i.e., if there was no tie),
        // update the score
        if (result !== undefined) {
            console.log(roundCount);
            scoreElement.innerHTML = `<h1>Player ${playerWins} Computer ${computerWins}</h1>`;
        }

    }

});
});




function getComputerChoice() { //Randomizer computer's selection, we declare the array with the options and then we select one from there.
        let computerChoice = options[Math.floor(Math.random() * options.length)]
        return computerChoice;
}



function playRound(playerChoice, computerChoice) {



    // Check if the player's choice and the computer's choice are the same
    if (playerChoice === computerChoice) {
        // Update the <h1> element in the <div> with the class "Score"
        // to display the "Tie!" header
        document.querySelector('.Score').innerHTML = `<h1>Tie!</h1>`;

        // Return early from the function to avoid updating the playerWins and
        // computerWins variables
        return;
    }


    if (playerChoice =="Rock" && computerChoice =="Paper"){//Player chooses Rock

        playerWins++;
        roundCount++;
        return playerWins, roundCount;
    }

    if (playerChoice =="Rock"&& computerChoice =="Scissors"){

        computerWins++;
        roundCount++;
        return playerWins, roundCount;
    }

    if (playerChoice =="Rock"& computerChoice =="Rock"){
        
        roundCount++;
        return playerWins, roundCount;

    }
    
/////

    if (playerChoice =="Scissors"&& computerChoice =="Paper"){//Player Chooses Scissor

        playerWins++;
        roundCount++;
        return playerWins, roundCount;
    }

    if (playerChoice =="Scissors"&& computerChoice =="Scissors"){
        roundCount++;
        return playerWins, roundCount;

    }

    if (playerChoice =="Scissors"& computerChoice =="Rock"){

        computerWins++;
        roundCount++;
        return playerWins, roundCount;
    }

/////

    if (playerChoice =="Paper"&& computerChoice =="Paper"){//Player Chooses paper
        roundCount++;
        return playerWins, roundCount;

    }

    if (playerChoice =="Paper"&& computerChoice =="Scissors"){
        computerWins++;
        roundCount++;
        return playerWins, roundCount;
    }

    if (playerChoice =="Paper"& computerChoice =="Rock"){
        playerWins++;
        roundCount++;
        return playerWins, roundCount;
    }
    
    
  }


  function resetGame (){
    let scoreElement = document.querySelector('.Score');
    document.querySelector('#Rock').style.display = 'block';
    document.querySelector('#Paper').style.display = 'block';
    document.querySelector('#Scissors').style.display = 'block';
    computerWins = 0;
    playerWins = 0;
    roundCount = 0;
    scoreElement.innerHTML = `<h1>Player ${playerWins} Computer ${computerWins}</h1>`;
    document.querySelector('#reset').style.display = 'none';
  }

  function getWinner (playerWins,computerWins){
    var winner = "";
   
    if (playerWins>computerWins){
        winner = "Player";
        return winner;
    }
    else {
        winner = "Computer";
        return winner;
    }
  }
      
  var options = [
    'Rock',
    'Paper',
    'Scissors',
    ]

    var computerWins = 0;
    var playerWins = 0;
    var roundCount = 0;




 
    
     
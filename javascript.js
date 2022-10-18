


function getComputerChoice() { //Randomizer computer's selection, we declare the array with the options and then we select one from there.
        let computerChoice = options[Math.floor(Math.random() * options.length)]
        return computerChoice;
}

function getplayerSelection(){
    var playerChoice;
    playerChoice = prompt("Type your choice (1=Rock 2=Paper 3=Scissors)"  );
    
    while (playerChoice>3 || playerChoice<0 ){
        playerChoice = prompt("Invalid choice, please type a number between 1-3 (1=Rock 2=Paper 3=Scissors)"  );
    }
    playerChoice = Math.round(playerChoice-1);
    playerChoice = options[playerChoice]; 
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice =="Rock" && computerChoice =="Paper"){//Player chooses Rock
        console.log("Player: " +playerChoice, " Computer: "+computerChoice);
        console.log("Paper beats rock!");
        console.log("Computer wins!");
        computerWins++;
    }

    if (playerChoice =="Rock"&& computerChoice =="Scissors"){
        console.log("Player: " +playerChoice, " Computer: "+computerChoice);
        console.log("Rock beats scissors!");
        console.log("Player wins!");
        playerWins++;
    }

    if (playerChoice =="Rock"& computerChoice =="Rock"){
        console.log("Player: " +playerChoice, " Computer: "+computerChoice);
        console.log("Rock and rock is a tie");
        console.log("No winner");
    }
    
/////

    if (playerChoice =="Scissors"&& computerChoice =="Paper"){//Player Chooses Scissor
        console.log("Player: " +playerChoice, " Computer: "+computerChoice);
        console.log("Scissors beats paper!");
        console.log("Player wins!");
        playerWins++;
    }

    if (playerChoice =="Scissors"&& computerChoice =="Scissors"){
        console.log("Player: " +playerChoice, " Computer: "+computerChoice);
        console.log("Scissors and scissors is a tie");
        console.log("No winner");
    }

    if (playerChoice =="Scissors"& computerChoice =="Rock"){
        console.log("Player: " +playerChoice, " Computer: "+computerChoice);
        console.log("Rock beats scissors");
        console.log("Computer wins!");
        computerWins++;
    }

/////

    if (playerChoice =="Paper"&& computerChoice =="Paper"){//Player Chooses paper
        console.log("Player: " +playerChoice, " Computer: "+computerChoice);
        console.log("Paper and paper is a tie");
        console.log("No winner");
    }

    if (playerChoice =="Paper"&& computerChoice =="Scissors"){
        console.log("Player: " +playerChoice, " Computer: "+computerChoice);
        console.log("Scissors beats paper!");
        console.log("Computer wins!");
        computerWins++;
    }

    if (playerChoice =="Paper"& computerChoice =="Rock"){
        console.log("Player: " +playerChoice, " Computer: "+computerChoice);
        console.log("Paper beats rock!");
        console.log("Player wins!");
        playerWins++;
    }
    
  }

  function game (){

    for (let i = 0; i < 5; i++) {
        
       var a = getplayerSelection();
       var b = getComputerChoice();
        playRound(a,b);
     }
     
     
  }
  var options = [
    'Rock',
    'Paper',
    'Scissors',
    ]

    var computerWins = 0;
    var playerWins = 0

    game();
    if (computerWins>playerWins){
        console.log("Computer won best out of five.");
     }
     if (playerWins>computerWins){
        console.log("Player won best out of five.");
     }
     if (playerWins==computerWins){
        console.log("Tie! There's no winner");
     }

     console.log("Computer Wins:" +computerWins +"  Player Wins:" +playerWins);
   

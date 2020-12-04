function game(rounds){
  //Initialize scoreboard
  scores = {
    player: 0,
    computer: 0
  };

  //Repeat rounds until reaching defined number
  for (var i = 0; i < rounds; i++) {
    const [message, result] = playRound();
    console.log(message);
    if (result === 'win') {
      scores["player"] += 1;
    } else if (result === 'lose') {
      scores["computer"] += 1;
    }
    console.log(scores);
  }

  //Report final score
  if (scores["player"] === scores["computer"]) {
    console.log("The game resulted in a tie!")
  } else if (scores["player"] > scores["computer"]) {
    console.log("You have won the game! Nice!")
  } else {
    console.log("You have lost the game! Try again next time :(")
  }

  //Allows computer to select random choice
  function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  //Prompt user for choice and return choice
  function playerSelection() {
    let choices = ["rock", "paper", "scissors"];
    var response;
    let needAnswer = true;
    while (needAnswer) {
      response = prompt("Choose rock, paper, or scissors").toLowerCase();
      if (choices.includes(response)) {
        return response;
      } else {
        alert("Invalid selection, please choose again.")
      }
    }
  }

  //Play one round of game
  function playRound () {
    cpuChoice = computerPlay();
    playerChoice = playerSelection();
    whatBeatsIt = {
      rock: "paper",
      paper: "scissors",
      scissors: "rock"
    };
    //Use whatBeatsIt object to decide the winner of the round. Return both a message and the result.
    if (cpuChoice === playerChoice) {
      return [`Computer chose: ${cpuChoice}. You chose: ${playerChoice}. It's a tie!`, 'tie'];
    } else if (whatBeatsIt[playerChoice] === cpuChoice){
      return [`Computer chose: ${cpuChoice}. You chose: ${playerChoice}. You lose! ${cpuChoice} beats ${playerChoice}!`, 'lose'];
    } else {
      return [`Computer chose: ${cpuChoice}. You chose: ${playerChoice}. You win! ${playerChoice} beats ${cpuChoice}!`, 'win'];
    }
  }
}
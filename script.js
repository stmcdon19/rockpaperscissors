class Game {
  //fields
  score = {
    user: 0,
    cpu: 0
  };
  userChoice;
  rounds;

  //constructor
  constructor(rounds){
    this.rounds = rounds;
  };

  //getters


  //setters


  //methods
  makeCpuChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  chooseWinner(userChoice, cpuChoice){
    let whatBeatsIt = {
      rock: "paper",
      paper: "scissors",
      scissors: "rock"
    };
    if (cpuChoice === userChoice) {
      return 'tie';
    } else if (whatBeatsIt[userChoice] === cpuChoice){
      return 'cpu';
    } else {
      return 'user';
    };
  };

  playRound(userChoice){
    let cpuChoice = this.makeCpuChoice();
    let winner = this.chooseWinner(userChoice, cpuChoice);
    console.log(cpuChoice);
    console.log(winner);
    if (winner === 'cpu'){
      this.score['cpu']++;
    } else if (winner === 'user') {
      this.score['user']++;
    };
    console.log(this.score);
    return [cpuChoice, winner]
  };
  playGame(rounds){};
}

//initialize game
game = new Game(3);

//Take a choice from the user using event handler
const choiceButtons = document.querySelectorAll("#user-choices .choice");
choiceButtons.forEach(el => {
  el.addEventListener('click', function() {
    let userChoice = this.id;
    let [cpuChoice, winner] = game.playRound(userChoice);
    //Display results based on results of the game
    if (winner === 'tie') {
      setMessage(`You chose ${userChoice}. The CPU chose ${cpuChoice}. It's a tie, go again!`)
    } else if (winner === 'cpu'){
      setMessage(`You chose ${userChoice}. The CPU chose ${cpuChoice}. You lost! Choose the right one next time.`)
    } else if (winner === 'user'){
      setMessage(`You chose ${userChoice}. The CPU chose ${cpuChoice}. You won! Congrats, have a cookie.`)
    }

    // Add not-chosen style the buttons that were not chosen by the user
    choiceButtons.forEach(el => {
      if(el.id != userChoice){
        el.classList.add("not-chosen");
      };
    });
    updateScoreboard();
  });
});


function setMessage(message) {
  document.querySelector('#current-msg').textContent = message;
};

function updateScoreboard() {
  document.querySelector('#user-score p').textContent = `Your Score: ${game.score['user']}`;
  document.querySelector('#cpu-score p').textContent = `CPU Score: ${game.score['cpu']}`;

};

//Overall Flow
//User is prompted to choose r/p/s
//User clicks a choice. Result is recorded
//CPU makes a choice. Result is recorded
//Compare choices and record winner.
//Display to user: their choice, cpu choice, winner
//Increment scoreboard 

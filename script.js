class Game {
  //fields
  score = {
    user: 0,
    cpu: 0
  };
  userChoice;

  //constructor
  constructor(rounds){
    this.rounds = rounds;
  };

  //methods -- Only for core game logic. DOM manip functions defined outside class
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

  //Compares the User's choice with the CPU's choice and declares a winner
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
};

//initialize game
game = new Game(3);

//Add event listener to play-again button -- used later
document.querySelector("#play-again").addEventListener('click', function(){
  resetGameArea();
  togglePlayAgain();
});

//Take a choice from the user using event handler
const userChoiceButtons = document.querySelectorAll("#user-choices .choice");
const cpuChoiceButtons = document.querySelectorAll("#cpu-choices .choice");
userChoiceButtons.forEach(el => {
  el.addEventListener('click', function() {
    let userChoiceId = this.id;
    let userChoice = userChoiceId.slice(5);
    let [cpuChoice, winner] = game.playRound(userChoice);
    let cpuChoiceId = `cpu-${cpuChoice}`;

    //Display results based on results of the game
    if (winner === 'tie') {
      setMessage(`You chose ${userChoice}. The CPU chose ${cpuChoice}. It's a tie, go again!`)
    } else if (winner === 'cpu'){
      setMessage(`You chose ${userChoice}. The CPU chose ${cpuChoice}. You lost!`)
    } else if (winner === 'user'){
      setMessage(`You chose ${userChoice}. The CPU chose ${cpuChoice}. You won!`)
    }

    // Add not-chosen class to buttons that were not chosen by the user
    userChoiceButtons.forEach(el => {
      if(el.id != userChoiceId){
        el.classList.add("not-chosen");
      };
      el.classList.add("deactivated");
    });

    //Add not-chosen class to buttons not selected by cpu
    cpuChoiceButtons.forEach(el => {
      if(el.id != cpuChoiceId){
        el.classList.add("not-chosen");
      };
    });
    updateScoreboard();
    togglePlayAgain();


  });
});

//Helper functions
function setMessage(message) {
  document.querySelector('#current-msg').textContent = message;
};

function updateScoreboard() {
  document.querySelector('#user-score p').textContent = `Your Score: ${game.score['user']}`;
  document.querySelector('#cpu-score p').textContent = `CPU Score: ${game.score['cpu']}`;

};

function togglePlayAgain() {
  button = document.querySelector("#play-again");
  button.classList.toggle("invisible");
  button.classList.toggle("deactivated");
}

function resetGameArea() {
  setMessage("Make your choice! Rock, Paper, or Scissors?");
  const allChoiceButtons = document.querySelectorAll(".choice");
  allChoiceButtons.forEach(el => {
    el.classList.remove("not-chosen");
    el.classList.remove("deactivated");
  });
};
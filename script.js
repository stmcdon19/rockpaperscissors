













//Take a choice from the user using event handler
const choiceButtons = document.querySelectorAll(".choice");
choiceButtons.forEach(el => {
  el.addEventListener('click', function() {
    let userSelection = this.id;
    makeChoice(userSelection);
  });
});


function makeChoice(choice) {
  document.querySelector('#current-msg').textContent = `You have chosen ${choice}`;
}


//Overall Flow
//User is prompted to choose r/p/s
//User clicks a choice. Result is recorded
//CPU makes a choice. Result is recorded
//Compare choices and record winner.
//Display to user: their choice, cpu choice, winner
//Increment scoreboard 

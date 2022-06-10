function computerPlay() {
  const hand = ["rock", "paper", "scissors"];
  return hand[Math.floor(Math.random() * hand.length)];
}

function playerSelection() {
  const validAnswer = false;

  while (validAnswer == false) {
    const usrInput = prompt("Type Rock, Paper or Scissors");
    if (
      usrInput.toLowerCase() != "rock" &&
      usrInput.toLowerCase() != "paper" &&
      usrInput.toLowerCase() != "scissors"
    ) {
      alert("Please fix your spelling and only enter rock, paper, or scissors");
    } else {
      console.log("Player Input: " + usrInput);
      return usrInput;
    }
  }
}

function results(compSel, playerSel) {
  if (
    (compSel == "rock" && playerSel == "scissors") ||
    (compSel == "paper" && playerSel == "rock") ||
    (compSel == "scissors" && playerSel == "paper")
  ) {
    return "Computer wins this round!";
  } else if (compSel == playerSel) {
    return "There is a tie";
  } else {
    return "Player wins this round!";
  }
}

function game() {
  let compTally = 0;
  let playerTally = 0;

  for (let i = 0; i < 5; i++) {
    console.log("Round: " + (i + 1));
    const comp = computerPlay();
    console.log("Computer Input: " + comp);
    const res = results(comp, playerSelection());
    console.log(res);
    console.log("");

    if (res == "Computer wins this round!") {
      compTally++;
      //console.log("COMPUTER wins: " + compTally);
    }
    if (res == "Player wins this round!") {
      playerTally++;
      //console.log("PLAYER wins: " + playerTally);
    }
  }

  console.log("");
  if (compTally > playerTally) {
    console.log("Computer is the Game Winner!");
  } else if (compTally < playerTally) {
    console.log("Player is the Game Winner!");
  } else {
    console.log("There is a tie");
  }
}

game();

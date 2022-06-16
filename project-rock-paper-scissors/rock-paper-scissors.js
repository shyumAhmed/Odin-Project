const content = document.querySelector(".content");
const div = document.createElement("div");
content.appendChild(div);
let clicked = "";
let compTally = 0;
let playerTally = 0;
let round = 1;

function computerPlay() {
  const hand = ["rock", "paper", "scissors"];
  return hand[Math.floor(Math.random() * hand.length)];
}

function playerSelection(id) {
  div.textContent = id;
  clicked = id;
  update();
}

function playerButtonClicked() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (round <= 5) {
        playerSelection(e.target.id);
        round++;
      }
    });
  });
}

function results(compSel, playerSel) {
  if (
    (compSel == "rock" && playerSel == "scissors") ||
    (compSel == "paper" && playerSel == "rock") ||
    (compSel == "scissors" && playerSel == "paper")
  ) {
    compTally++;
    return "Computer wins this round!";
  } else if (compSel == playerSel) {
    return "There is a tie";
  } else {
    playerTally++;
    return "Player wins this round!";
  }
}

function update() {
  const comp = computerPlay();
  console.log("Computer Input: " + comp);
  console.log("player input: " + clicked);

  const res = results(comp, clicked);
  console.log(res);

  console.log("");
  if (round >= 5) {
    if (compTally > playerTally) {
      console.log("Computer is the Game Winner!");
    } else if (compTally < playerTally) {
      console.log("Player is the Game Winner!");
    } else {
      console.log("The game is tied ");
    }
  }
}

playerButtonClicked();

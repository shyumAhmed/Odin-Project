const dispBoardDiv = document.querySelector(".display-board");
const compSideDiv = document.querySelector(".computer-side");
const playerDispDiv = document.createElement("div");
const compDispDiv = document.createElement("div");
const roundWinnerDiv = document.createElement("div");
const gameWinnerDiv = document.createElement("div");
const roundHeader = document.createElement("h3");
const img = document.createElement("img");
dispBoardDiv.appendChild(roundHeader);
dispBoardDiv.appendChild(playerDispDiv);
dispBoardDiv.appendChild(compDispDiv);
dispBoardDiv.appendChild(roundWinnerDiv);
dispBoardDiv.appendChild(gameWinnerDiv);

let clicked = "";
let compTally = 0;
let playerTally = 0;
let round = 1;

function computerPlay() {
  const hand = ["rock", "paper", "scissors"];
  return hand[Math.floor(Math.random() * hand.length)];
}

function playerSelection(id) {
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
    return "You this round!";
  }
}

function update() {
  const comp = computerPlay();

  img.src = "./img/" + comp + ".png";
  compSideDiv.appendChild(img);

  roundHeader.textContent = "Round " + round + "/5";
  compDispDiv.textContent = "Computer Selected: " + comp;
  playerDispDiv.textContent = "Player Selected: " + clicked;

  const res = results(comp, clicked);
  roundWinnerDiv.textContent = res;

  console.log("");
  if (round >= 5) {
    if (compTally > playerTally) {
      gameWinnerDiv.textContent = "Computer is the game Winner!";
    } else if (compTally < playerTally) {
      gameWinnerDiv.textContent = "You're the game Winner!";
    } else {
      gameWinnerDiv.textContent = "The game is Tied";
    }
  }
}

playerButtonClicked();

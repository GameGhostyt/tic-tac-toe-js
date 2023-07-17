// JavaScript code for Tic Tac Toe game

// Function to handle the click on a cell
function cellClick(cell) {
  if (cell.innerText === "") {
    cell.innerText = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + " wins!");
      resetBoard();
    } else if (checkDraw()) {
      alert("It's a draw!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

// Function to check if a player has won
function checkWin() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
      return true;
    }
  }
  return false;
}

// Function to check if the game is a draw
function checkDraw() {
  for (const cell of cells) {
    if (cell.innerText === "") {
      return false;
    }
  }
  return true;
}

// Function to reset the game board
function resetBoard() {
  for (const cell of cells) {
    cell.innerText = "";
  }
  currentPlayer = "X";
}

// Initialization
const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
for (const cell of cells) {
  cell.addEventListener("click", () => cellClick(cell));
}

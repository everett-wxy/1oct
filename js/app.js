let board = "";
let turn = "";
let winner = "";
let tie = "";

const squareEls = document.querySelectorAll(".sqr");
// console.dir(squareEls)

const messageEl = document.getElementById("message");
// console.dir(messageEl);

const resetBtnEl = document.getElementById("reset");
// console.dir(resetBtnEl);

resetBtnEl.addEventListener("click", init);

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [2, 5, 8],
  [1, 4, 7],
  [0, 3, 6],
];

function init() {
  //   console.log("Hi");
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
}

init();

function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  board.forEach((value, index) => {
    const element = squareEls[index];
    element.textContent = value;
  });
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.innerText = `This is ${turn}'s turn`;
  } else if (winner === false && tie === true) {
    messageEl.innerText = `This is a tie`;
  } else {
    messageEl.innerText = `${turn} player has won!`;
  }
}

const handleClick = (e) => {
  let squareIndex = "";
  squareIndex = e.target.id;
  placePiece(squareIndex);
  checkWinner();
  checkTie();
  switchPlayerTurn();
  render();
};

squareEls.forEach((squareEl) => {
  squareEl.addEventListener("click", handleClick);
});

function placePiece(index) {
  board[index] = turn;
  console.log(board);
}

function checkWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    let keyIndexOne = winningCombos[i][0];
    let keyIndexTwo = winningCombos[i][1];
    let keyIndexThree = winningCombos[i][2];
    // console.log(`this is ${i+1}x attempt`);
    // console.log(keyIndexOne);
    // console.log(keyIndexTwo);
    // console.log(keyIndexThree);
    // console.log(board[keyIndexOne]);
    // console.log(board[keyIndexTwo]);
    // console.log(board[keyIndexThree]);
    if (
      board[keyIndexOne] !== "" &&
      board[keyIndexOne] == board[keyIndexTwo] &&
      board[keyIndexOne] == board[keyIndexThree]
    ) {
      winner = true;
      updateMessage();
    }
    // console.log(winningCombos[i][0], winningCombos[i][1], winningCombos[i][2]);
    // let winningPositions = [winningCombos[i][0], winningCombos[i][1], winningCombos[i][2]];

    // console.log(`${board[i][0]}, ${board[i][1]}, ${board[i][2]}`);
  }
}

function checkTie() {
  if (winner == true) {
    return;
  } else if (board.includes("")) {
    tie = false;
  } else tie = true;
}

function switchPlayerTurn() {
  if (winner == true) {
    return;
  } else if (turn == "X") {
    turn = "O";
    console.log(turn);
  } else if (turn == "O") {
    turn = "X";
    console.log(turn);
  }
}

let players = ['x', 'o'];
let activePlayer = 0;

let board = [
  ['', '', '',],
  ['', '', '',],
  ['', '', '',],
];

function startGame() {
  renderBoard(board);
  activePlayer = 0;
}

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);
  if (winGame (activePlayer, row, col)) {
    showWinner(activePlayer);
  } else {
    activePlayer = 1 - activePlayer;
  }
}

function winGame (player, row, col) {
  let winPlayer = players[player];
  return (
    (board[0][0] === winPlayer &&
    board[1][1] === winPlayer &&
    board[2][2] === winPlayer) ||
    
    (board[0][2] === winPlayer &&
    board[1][1] === winPlayer &&
    board[2][0] === winPlayer) ||

    (board[row][0] === winPlayer && 
     board[row][1] === winPlayer && 
     board[row][2] === winPlayer) ||

    (board[0][col] === winPlayer && 
     board[1][col] === winPlayer && 
     board[2][col] === winPlayer)
  ) 
}

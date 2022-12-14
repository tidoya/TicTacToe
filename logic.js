let players = ['x', 'o'];
let activePlayer = 0;
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
let number = 3;

function startGame(){
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  //отрисовка поля
  renderBoard(board);
}
  function click (strofNumber, col){
    // заполнение ячейки
    board[strofNumber][col] = players[activePlayer];
    
    // Отрисовка поля
    renderBoard(board);
    // Проверка на выигрушную ситуацию 
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][0] === players[activePlayer] && board[j][1] === players[activePlayer] && board[j][2] === players[activePlayer]) {
        showWinner(activePlayer); 
      }
      else if (board[0][i] === players[activePlayer] && board[1][i] === players[activePlayer] && board[2][i] === players[activePlayer]) {
        showWinner(activePlayer); 
      }
      else if (board[0][0] === players[activePlayer] && board[1][1] === players[activePlayer] && board[2][2] === players[activePlayer]) {
        showWinner(activePlayer); 
      }
      else if (board[0][2] === players[activePlayer] && board[1][1] === players[activePlayer] && board[2][0] === players[activePlayer]) {
        showWinner(activePlayer); 
      }
        else {
          if (activePlayer === 0) {
              activePlayer = 1;
            } 
            else {
              activePlayer = 0;
            }
        }
  }
 }

};

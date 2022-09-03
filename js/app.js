/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')
const boardEl = document.querySelector('.board')
const resetBtnEl = document.querySelector('#reset-button')
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/

init()


function init() {
  board = [null, null, null, null, null, null, null, null, null]
  //board = [1, -1, 1, null, 1, null, -1, -1, -1]
  turn = 1
  winner = null
  render()
}


function render() {
  board.forEach(function(value, idx) {
    
    // Style that square depending on the value contained in the current cell being iterated over
    if (value === 1) {
      squareEls[idx].textContent = 'X'
      squareEls[idx].style.color = 'blue'
    } else if (value === -1) {
      squareEls[idx].textContent = 'O'
      squareEls[idx].style.color = 'red'
    } else if (value === null) {
      squareEls[idx].textContent = ''
    }
  } )

  // render a message based on the current state
  if (winner === null) {
    let turnChooser = turn === 1 ? '1' : '2'
    messageEl.textContent = `Player ${turnChooser}'s turn`
  } else if (winner === 'T') {
    messageEl.textContent = `It's a tie`
  } else {
    let player = turn === -1 ? '1' : '2'
    messageEl.textContent = `Player ${player} wins!`
  }
}

function handleClick(evt) {
  // obtain the index of the square that was clicked
  const sqIdx = parseInt(evt.target.id.slice(2))
  //console.log(sqIdx, 'is the index of the square clicked')
  //console.log(board[sqIdx], 'is the value of the square clicked')
  
  if (board[sqIdx] !== null || winner !== null) {
    return
  }

  board[sqIdx] = turn
  turn = turn * -1
  
  getWinner()
  render()
}


function getWinner() {
  for (i=0; i<winningCombos.length; i++) {
    let comboSum = Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]])

    if (comboSum === 3) {
      winner = board[winningCombos[i][0]]
      return winner
    } else if (!board.include(null)) {
      winner = 'T'
      return winner
    } else {
      winner = null
      return winner
    }
  }
}









// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be 
//    called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Build the `getWinner` function

// 8) Create Reset functionality
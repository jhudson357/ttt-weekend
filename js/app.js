/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')
const boardEl = document.querySelector('.board')
const resetBtnEl = document.querySelector('#reset-button')
const rocketScore = document.querySelector('#rocket-score')
const ufoScore = document.querySelector('#ufo-score')
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

let board, turn, winner, clicks
let rocketCounter = 0
let ufoCounter = 0

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/

init()


function init() {
  board = [null, null, null, null, null, null, null, null, null]
  //board = [-1, -1, 1, 1, -1, -1, 1, 1, null]
  turn = 1
  winner = null
  clicks = 0
  resetBtnEl.setAttribute('hidden', true)
  render()
}


function render() {
  board.forEach(function(value, idx) {
    
    // Style that square depending on the value contained in the current cell being iterated over
    if (value === 1) {
      squareEls[idx].textContent = '🚀'
    } else if (value === -1) {
      squareEls[idx].textContent = '🛸'
    } else if (value === null) {
      squareEls[idx].textContent = ''
    }
  } )

  // render a message based on the current state
  if (winner === null) {
    let turnChooser = turn === 1 ? '🚀' : '🛸'
    messageEl.textContent = `${turnChooser}'s turn`
  } else if (winner === 'T') {
    messageEl.textContent = `It's a tie`
  } else {
    let player = turn === -1 ? '🚀' : '🛸'
    messageEl.textContent = `${player} wins!`
    messageEl.classList.add('animate__animated', 'animate__flash')
  }

  // display the reset button
  if (clicks === 1) {
    resetBtnEl.removeAttribute('hidden')
  }

  // update the score board
  if(winner === 1) {
    rocketCounter += 1
    rocketScore.textContent = rocketCounter
    //console.log(rocketCounter, 'rocketCounter')
  } else if (winner === -1) {
    ufoCounter += 1
    ufoScore.textContent = ufoCounter
    //console.log(ufoCounter, 'ufoCounter')
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
  clicks++
  //console.log(clicks)
  for (combo of winningCombos) {
    let sumCombo = Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]])

    //console.log(sumCombo, 'combo:', combo, clicks)

    if (clicks < 9) {
      if (sumCombo === 3) {
        winner = board[combo[0]]
        //console.log(sumCombo +' '+ winner)
      }
    } else if (clicks === 9) {
      if (sumCombo === 3) {
        winner = board[combo[0]]
        //console.log('clicks is', clicks)
        return winner
      } else {
        winner = 'T'
      }
    }
  }
}

//alternate getWinner function that works
// function getWinner() {
//   //console.log(Math.abs(winningCombos[0].reduce((acc, num) => acc + board[num], 0)))
//   sumCombo1 = Math.abs(winningCombos[0].reduce((acc, num) => acc + board[num], 0))
//   sumCombo2 = Math.abs(winningCombos[1].reduce((acc, num) => acc + board[num], 0))
//   sumCombo3 = Math.abs(winningCombos[2].reduce((acc, num) => acc + board[num], 0))
//   sumCombo4 = Math.abs(winningCombos[3].reduce((acc, num) => acc + board[num], 0))
//   sumCombo5 = Math.abs(winningCombos[4].reduce((acc, num) => acc + board[num], 0))
//   sumCombo6 = Math.abs(winningCombos[5].reduce((acc, num) => acc + board[num], 0))
//   sumCombo7 = Math.abs(winningCombos[6].reduce((acc, num) => acc + board[num], 0))
//   sumCombo8 = Math.abs(winningCombos[7].reduce((acc, num) => acc + board[num], 0))

//   if (sumCombo1 === 3) {
//     winner = board[winningCombos[0][0]]
//   } else if (sumCombo2 === 3) {
//     winner = board[winningCombos[1][0]]
//   } else if (sumCombo3 === 3) {
//     winner = board[winningCombos[2][0]]
//   } else if (sumCombo4 === 3) {
//     winner = board[winningCombos[3][0]]
//   } else if (sumCombo5 === 3) {
//     winner = board[winningCombos[4][0]]
//   } else if (sumCombo6 === 3) {
//     winner = board[winningCombos[5][0]]
//   } else if (sumCombo7 === 3) {
//     winner = board[winningCombos[6][0]]
//   } else if (sumCombo8 === 3) {
//     winner = board[winningCombos[7][0]]
//   } else if (!board.includes(null)) {
//     winner = 'T'
//   } else {
//     winner = null
//   }
// } 

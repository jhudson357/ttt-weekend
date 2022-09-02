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
    messageEl.textContent = `It is Player ${turn}'s turn`
  } else if (winner === 'T') {
    messageEl.textContent = `The game is a tie`
  } else {
    messageEl.textContent = `Player ${winner} wins!`
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


// function getWinner() {
//   let sumArray = 0
//   winningCombos.forEach(function(array) {   // 1 array is one of the winning array combos
//     sumArray = Math.abs(array.reduce((acc, num) => acc + board[num], 0))
//     console.log(`${sumArray} - is the sum of the array and ${board[array[0]]} is the player of the winning combo ${array}`)
//     //console.log(board[array[0]], 'board[array[0]]')
//     //console.log(winner, 'winner')
    
//   })
//   // check for winner or tie or null
//   if (sumArray === 3) {
//     winner = board[array[0]]
//     console.log(winner, 'is a the winner')
//     return winner
//   } else if (board.forEach((space) => space !== null)) {
//     winner = 'T'
//     console.log(winner, 'tie')
//     return winner
//   } else {
//     winner = null
//     console.log(winner, 'the game is still being played')
//     return winner
//   }
// }


function getWinner() {
  //console.log(Math.abs(winningCombos[0].reduce((acc, num) => acc + board[num], 0)))
  sumCombo1 = Math.abs(winningCombos[0].reduce((acc, num) => acc + board[num], 0))
  sumCombo2 = Math.abs(winningCombos[1].reduce((acc, num) => acc + board[num], 0))
  sumCombo3 = Math.abs(winningCombos[2].reduce((acc, num) => acc + board[num], 0))
  sumCombo4 = Math.abs(winningCombos[3].reduce((acc, num) => acc + board[num], 0))
  sumCombo5 = Math.abs(winningCombos[4].reduce((acc, num) => acc + board[num], 0))
  sumCombo6 = Math.abs(winningCombos[5].reduce((acc, num) => acc + board[num], 0))
  sumCombo7 = Math.abs(winningCombos[6].reduce((acc, num) => acc + board[num], 0))
  sumCombo8 = Math.abs(winningCombos[7].reduce((acc, num) => acc + board[num], 0))

  if (sumCombo1 === 3) {
    winner = board[winningCombos[0][0]]
  } else if (sumCombo2 === 3) {
    winner = board[winningCombos[1][0]]
  } else if (sumCombo3 === 3) {
    winner = board[winningCombos[2][0]]
  } else if (sumCombo4 === 3) {
    winner = board[winningCombos[3][0]]
  } else if (sumCombo5 === 3) {
    winner = board[winningCombos[4][0]]
  } else if (sumCombo6 === 3) {
    winner = board[winningCombos[5][0]]
  } else if (sumCombo7 === 3) {
    winner = board[winningCombos[6][0]]
  } else if (sumCombo8 === 3) {
    winner = board[winningCombos[7][0]]
  } else if (!board.includes(null)) {
    winner = 'T'
  } else {
    winner = null
  }
} 








//// Step 1 - Define the required variables used to track the state of the game

  //// 1a) Use a variable named `board` to represent the state of the squares on
  ////    the board.

  //// 1b) Use a variable named `turn` to track whose turn it is.

  //// 1c) Use a variable named `winner` to represent if anyone has won yet, or 
  ////    if a tie has occurred.

//// Step 2 - Store cached element references

  //// 2a) In a constant called `squareEls`, store the nine elements 
  ////    representing the squares on the page.

  //// 2b) In a constant called `messageEl`, store the element that displays the 
  ////    game's status on the page.


//// Step 3 - Upon loading, the game state should be initialized, and a function 
////          should be called to render this game state

  //// 3a) Create a function called `init`.

  //// 3b) Call this `init` function when the app loads.

  //// 3c) Set the `board` variable to an array containing nine `null`s to 
  ////    represent empty squares.

  //// 3d) Set the `turn` to `1` - which will represent player X.

  //// 3e) Set the `winner` to `null`.

  //// 3f) Call a function called `render` at the end of the `init` function.

//// Step 4 - The state of the game should be rendered to the user

  //// 4a) Create a function called `render`.
  //// 4b) Loop over `board` and for each element:
  ////       square in the `squareEls` array.
  ////     - Style that square however you wish, dependent on the value  
  ////       contained in the current cell being iterated over (`-1`, `1`, or
  ////       `null`). 
  
  //// 4c) Render a message based on the current game state:
  ////     - If winner has a value of `null` (meaning the game is still in
  ////       progress), render whose turn it is.
  ////     - If `winner` is equal to `'T'` (tie), render a tie message.
  ////     - Otherwise, render a congratulatory message to the player that has 
  ////       won.
    

//// Step 5 - Define the required constants

  //// 5a) In a constant called `winningCombos` define the eight possible winning 
  ////     combinations as an array of arrays.

// Step 6 - Handle a player clicking a square with a `handleClick` function

  // 6a) Create a function called `handleClick`. It will have an `evt`
  //     parameter.

  // 6b) Attach an event listener to the game board (you can do this to each
  //     one of the existing `squareEls` OR add a new cached element reference
  //     that will allow you to take advantage of event bubbling). On the
  //     `'click'` event, it should call the `handleClick` function
  //     you created in 6a.

  // 6c) Obtain the index of the square that was clicked by "extracting" the 
  //     index from an `id` assigned to the element in the HTML. Assign this  
  //     to a constant called `sqIdx`.

  // 6d) If the `board` has a value at the `sqIdx`, immediately `return`  
  //     because that square is already taken. Also, if `winner` is not `null`
  //     immediately `return` because the game is over.

  // 6e) Update the `board` array at the `sqIdx` with the current value of
  //     `turn`.

  // 6f) Change the turn by multiplying `turn` by `-1` (this flips a `1` to
  //     `-1`, and vice-versa).

  // 6g) Set the `winner` variable if there's a winner by calling a new 
  //     function: `getWinner`.

  // 6h) All the state has been updated so we need to render our updated state 
  //     to the user by calling the `render` function we wrote earlier.

// Step 7 - Build the `getWinner` function

  // 7a) Create a function called `getWinner`

  /* 
   * There are two methods you can use to find out if there is a winner.
   *
   * Step b1 below is a more elegant method that takes advantage of the
   * `winningCombos` array you wrote above in step 5. 
   *
   * Step b2 might be a little simpler to comprehend, but you'll need to write  
   * more code. Step b2 also won't take advantage of the `winningCombos`
   * array, but using it as a reference will help you build a solution.
   * ***Ensure you choose only one path.***
   */

  // 7b1)Loop through each of the winning combination arrays defined in the 
  //     `winningCombos` array. Total up the three board positions using the 
  //     three indexes in the current combo. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at
  //     the index specified by the first index of that winning combination's
  //     array by returning that value.

  // 7b2)For each one of the winning combinations you wrote in step 5, find the
  //     total of each winning combination. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at 
  //     the index specified by the first index of that winning combination's 
  //     array by returning that value.

// 7c) If there is no winner, check to see if there is a tie. Set the  
  //     `winner` variable to `'T'` if there are no more nulls in the board  
  //     array byreturning the string `'T'`.

  // 7d) If there is no winner and there isn’t a tie, return `null`.

// Step 8 - Create Reset functionality

  // 8a) Add a reset button to the HTML document.

  // 8b) Store the new reset button element in a constant named `resetBtnEl`.

  // 8c) Attach an event listener to the `resetBtnEl`. On the `'click'` event 
  //     it should call the `init` function you created in 3.








// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be 
//    called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Build the `getWinner` function

// 8) Create Reset functionality
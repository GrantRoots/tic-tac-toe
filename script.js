function Gameboard() {
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    let winner = false

    const selectTile = (tile, symbol) => {
        if (typeof board[tile] !== "string") {
            board.splice(tile, 1, symbol)
            console.log(board)
        }
        else {
            console.log('tile already taken')
        }
    }

    const checkWinner = () => {
        //horizontal row X
        for (let i = 0; i <= 2; i++) {
            if (board[i] === 'X') {}
            else {break}
            if (i === 2) {
                console.log('X wins')
                return winner = true
            }
        }
        for (let i = 3; i <= 6; i++) {
            if (board[i] === 'X') {}
            else {break}
            if (i === 6) {
                console.log('X wins')
                return winner = true
            }
        }
        for (let i = 6; i <= 8; i++) {
            if (board[i] === 'X') {}
            else {break}
            if (i === 8) {
                console.log('X wins')
                return winner = true
            }
        }

        // horizontal row O
        for (let i = 0; i <= 2; i++) {
            if (board[i] === 'O') {}
            else {break}
            if (i === 2) {
                console.log('O wins')
                return winner = true
            }
        }
        for (let i = 3; i <= 5; i++) {
            if (board[i] === 'O') {}
            else {break}
            if (i === 5) {
                console.log('O wins')
                return winner = true
            }
        }
        for (let i = 6; i <= 8; i++) {
            if (board[i] === 'O') {}
            else {break}
            if (i === 8) {
                console.log('O wins')
                return winner = true
            }
        }

        //vertical row X
        for (let i = 0; i <= 6; i += 3) {
            if (board[i] === 'X') {}
            else {break}
            if (i === 6) {
                console.log('X wins')
                return winner = true
            }
        }
        for (let i = 1; i <= 7; i += 3) {
            if (board[i] === 'X') {}
            else {break}
            if (i === 7) {
                console.log('X wins')
                return winner = true
            }
        }
        for (let i = 2; i <= 8; i += 3) {
            if (board[i] === 'X') {}
            else {break}
            if (i === 8) {
                console.log('X wins')
                return winner = true
            }
        }

        //vertical row O
        for (let i = 0; i <= 6; i += 3) {
            if (board[i] === 'O') {}
            else {break}
            if (i === 6) {
                console.log('O wins')
                return winner = true
            }
        }
        for (let i = 1; i <= 7; i += 3) {
            if (board[i] === 'O') {}
            else {break}
            if (i === 7) {
                console.log('O wins')
                return winner = true
            }
        }
        for (let i = 2; i <= 8; i += 3) {
            if (board[i] === 'O') {}
            else {break}
            if (i === 8) {
                console.log('O wins')
                return winner = true
            }
        }

        //diagonal down right X
        for (let i = 0; i <= 8; i += 4) {
            if (board[i] === 'X') {}
            else {break}
            if (i === 8) {
                console.log('X wins')
                return winner = true
            }
        }

        //diagonal down right O
        for (let i = 0; i <= 8; i += 4) {
            if (board[i] === 'O') {}
            else {break}
            if (i === 8) {
                console.log('O wins')
                return winner = true
            }
        }

        //diagonal down left X
        for (let i = 2; i <= 6; i += 2) {
            if (board[i] === 'X') {}
            else {break}
            if (i === 6) {
                console.log('X wins')
                return winner = true
            }
        }

        //diagonal down left O
        for (let i = 2; i <= 6; i += 2) {
            if (board[i] === 'O') {}
            else {break}
            if (i === 6) {
                console.log('O wins')
                return winner = true
            }
        }
    }
    winner = checkWinner()

    const resetBoard = () => {
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    return {selectTile, 
            checkWinner, 
            winner,
            board,
            resetBoard
    }
}

function gameController() {

    let board = Gameboard()

    const players = [
        {
            name: 'Player One',
            symbol: 'X'
        },
        {
            name: 'Player Two',
            symbol: 'O'
        }
    ]
    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const playGame = () => {
        let round = 1

        const tiles = document.querySelectorAll('.tile').forEach(tile => 
            tile.addEventListener('click', () => {
                if (typeof board.board[tile.id] !== 'string') {
                    tile.textContent = activePlayer.symbol
                    board.selectTile(tile.id, activePlayer.symbol)
                    switchPlayerTurn();
                }
                board.checkWinner()
                if (board.checkWinner() === true) {
                    return
                }
                if (activePlayer.symbol === 'X') {
                    round++
                }
                if (round === 5 && activePlayer.symbol === 'O' && board.winner === false) {
                    console.log('game over its a tie')
                }
            })
        )
    }

    const resetButton = document.querySelector('.reset')
        resetButton.addEventListener('click', () => {
            board.resetBoard()
            board = Gameboard()
            const tiles = document.querySelectorAll('.tile').forEach(tile => 
                tile.textContent = ''
            )
    })

    return {
        playGame
    }
}
const game = gameController()

const startButton = document.querySelector('.start')
startButton.addEventListener('click', () => {
    game.playGame()
})

const addNames = document.getElementById("addNames");
const nameDialog = document.getElementById("nameDialog");
const outputBox = document.querySelector("output");

const Odiv = document.querySelector('.nameO')
const Xdiv = document.querySelector('.nameX')

const nameX = nameDialog.querySelector("#nameX");
const nameO = nameDialog.querySelector("#nameO");

const confirmBtn = nameDialog.querySelector("#confirmBtn");

addNames.addEventListener("click", () => {
  nameDialog.showModal();
});

nameDialog.addEventListener("close", (e) => {
  nameDialog.close()
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  Odiv.textContent = nameO.value
  Xdiv.textContent = nameX.value
  nameDialog.close();
});
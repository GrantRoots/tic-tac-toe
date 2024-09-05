function Gameboard() {
    const board = ['X', 'X', 'X', 0, 0, 0, 0, 0, 0];

    const selectTile = (tile, symbol) => {
        if (board[tile] === 0) {
            board.splice(tile, 1, symbol)
            console.log(board)
        }
        else {
            console.log('tile already taken')
        }

        const checkWinner = () => {
            //horizontal row X
            for (let i = 0; i < 2; i++) {
                if (board[i] === 'X') {}
                else {break}
                console.log('X wins')
                return winner = true
            }
            for (let i = 3; i < 5; i++) {
                if (board[i] === 'X') {}
                else {break}
                console.log('X wins')
                return winner = true
            }
            for (let i = 6; i < 8; i++) {
                if (board[i] === 'X') {}
                else {break}
                console.log('X wins')
                return winner = true
            }

            // horizontal row O
            for (let i = 0; i < 2; i++) {
                if (board[i] === 'O') {}
                else {break}
                console.log('O wins')
                return winner = true
            }
            for (let i = 3; i < 5; i++) {
                if (board[i] === 'O') {}
                else {break}
                console.log('O wins')
                return winner = true
            }
            for (let i = 6; i < 8; i++) {
                if (board[i] === 'O') {}
                else {break}
                console.log('O wins')
                return winner = true
            }

            //vertical row X
            for (let i = 0; i < 6; i += 3) {
                if (board[i] === 'X') {}
                else {break}
                console.log('X wins')
                return winner = true
            }
            for (let i = 1; i < 7; i += 3) {
                if (board[i] === 'X') {}
                else {break}
                console.log('X wins')
                return winner = true
            }
            for (let i = 2; i < 8; i += 3) {
                if (board[i] === 'X') {}
                else {break}
                console.log('X wins')
                return winner = true
            }

            //vertical row O
            for (let i = 0; i < 6; i += 3) {
                if (board[i] === 'O') {}
                else {break}
                console.log('O wins')
                return winner = true
            }
            for (let i = 1; i < 7; i += 3) {
                if (board[i] === 'O') {}
                else {break}
                console.log('O wins')
                return winner = true
            }
            for (let i = 2; i < 8; i += 3) {
                if (board[i] === 'O') {}
                else {break}
                console.log('O wins')
                return winner = true
            }

            //diagonal down right X
            for (let i = 0; i < 8; i += 4) {
                if (board[i] === 'X') {}
                else {break}
                console.log('X wins')
                return winner = true
            }

            //diagonal down right O
            for (let i = 0; i < 8; i += 4) {
                if (board[i] === 'O') {}
                else {break}
                console.log('O wins')
                return winner = true
            }

            //diagonal down left X
            for (let i = 2; i < 6; i += 2) {
                if (board[i] === 'X') {}
                else {break}
                console.log('X wins')
                return winner = true
            }

            //diagonal down left O
            for (let i = 2; i < 6; i += 2) {
                if (board[i] === 'O') {}
                else {break}
                console.log('O wins')
                return winner = true
            }
        }
        checkWinner()
    }
    return {selectTile}
}

function gameController() {

    const board = Gameboard()

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

    const playRound = (tile) => {
        board.selectTile(4, activePlayer.symbol)
        if (winner = true) {return}
        switchPlayerTurn();
        board.selectTile(5, activePlayer.symbol)
    };

    const playGame = () => {
        let round = 1
        for (; round < 5; round++) {
            console.log(round)
            playRound()
            if (winner = true) {break}
        }
        if (round === 5) {
            console.log('its a tie')
        }
    }

    return {
        playRound,
        playGame
    }
}
const game = gameController()
game.playGame()


// have an array of 9 items(0-8)
// for html set 9 boxes equal to each array item (boxes should be buttons)
// if the certain boxes all contain an x / o then one person wins and their score++
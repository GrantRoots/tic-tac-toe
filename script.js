function Gameboard() {
    const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    // empty value = undefined

    const selectTile = (tile, symbol) => {
        if (board[tile] === 0) {
            //update tile
            board.splice(tile, 1, symbol)
            console.log(board)

            //dont need to check until first turn of round 3
            const checkWinner = () => {
                //or
                if (board[0] === board[1] && board[0] === board[3] ) {
                    //you win!
                }
            }
        }
        else {
            console.log('tile already taken')
        }
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
        switchPlayerTurn();
        board.selectTile(5, activePlayer.symbol)
    };

    const playGame = () => {
        for (let round = 1; round < 5; round++) {
            console.log(round)
            playRound()
        }
        //if its round 5 display 'its a tie!'
        if (round = 5) {
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
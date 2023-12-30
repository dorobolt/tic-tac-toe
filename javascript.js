// game logic:
// Player choose an array item of game board
// moved that item from game board to player board
// computer choose the array item from game board and move it to computer board
// if player or computer have all some set of array then player or computer win
// if game board is empty then game is tie

function gameStart() {
    const gameBoard = ['ul', 'um', 'ur', 'ml', 'm', 'mr', 'bl', 'bm', 'br'];
    const playerBoard = [];
    const computerBoard = [];
    const choose = (board) => {
        playerBoard.push(gameBoard[board]);
        gameBoard.splice(board, 1);
        result();
        let x = computerChoose();
        computerBoard.push(gameBoard[x]);
        gameBoard.splice(x, 1)
        result();
        console.log(playerBoard);
        console.log(computerBoard);
        console.log(gameBoard);

    }
    function computerChoose() {
        let num = Math.floor(gameBoard.length * Math.random());
        return num;
    }

    function result() {
        const winCondition1 = ['ul', 'um', 'ur'];
        const winCondition2 = ['ml', 'm', 'mr'];
        const winCondition3 = ['bl', 'bm', 'br'];
        const winCondition4 = ['ul', 'ml', 'bl'];
        const winCondition5 = ['um', 'm', 'bm'];
        const winCondition6 = ['ur', 'mr', 'br'];
        const winCondition7 = ['ul', 'm', 'br'];
        const winCondition8 = ['ur', 'm', 'bl'];

        if (winCondition1.every(r => playerBoard.includes(r)) == true ||
            winCondition2.every(r => playerBoard.includes(r)) == true ||
            winCondition3.every(r => playerBoard.includes(r)) == true ||
            winCondition4.every(r => playerBoard.includes(r)) == true ||
            winCondition5.every(r => playerBoard.includes(r)) == true ||
            winCondition6.every(r => playerBoard.includes(r)) == true ||
            winCondition7.every(r => playerBoard.includes(r)) == true ||
            winCondition8.every(r => playerBoard.includes(r)) == true) {
            console.log('Player Win!!');
        }
        else if (winCondition1.every(r => computerBoard.includes(r)) == true ||
            winCondition2.every(r => computerBoard.includes(r)) == true ||
            winCondition3.every(r => computerBoard.includes(r)) == true ||
            winCondition4.every(r => computerBoard.includes(r)) == true ||
            winCondition5.every(r => computerBoard.includes(r)) == true ||
            winCondition6.every(r => computerBoard.includes(r)) == true ||
            winCondition7.every(r => computerBoard.includes(r)) == true ||
            winCondition8.every(r => computerBoard.includes(r)) == true) {
            console.log('Computer Win!!');
        }
        else if (gameBoard.length === 0) {
            console.log('Tie Game');
        }
        else {
            return;
        }
    }
    return { gameBoard, playerBoard, computerBoard, choose };
}

const player = gameStart();
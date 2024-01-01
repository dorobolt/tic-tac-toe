// game logic:
// Player choose an array item of game board
// moved that item from game board to player board
// computer choose the array item from game board and move it to computer board
// if player or computer have all some set of array then player or computer win
// if game board is empty then game is tie

const panel = document.querySelectorAll('.panel');

function gameStart() {
    const gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    const gameProgress = [];
    const playerBoard = [];
    const computerBoard = [];
    const choose = (board) => {
        console.log(gameProgress.includes(playerBoard))
        if (gameProgress.includes(gameBoard[board]) == true && playerBoard.length !== 0) return
        panel[board].classList.add('player1')
        panel[board].classList.remove('open')
        playerBoard.push(gameBoard[board]);
        gameProgress.push(board);
        computerChoose();
        result();
        console.log(playerBoard);
        console.log(computerBoard);
        console.log(gameProgress);

    }
    function computerChoose() {
        const open = document.querySelectorAll('.open');
        let num = Math.floor(open.length * Math.random());
        open[num].classList.add('player2')
        open[num].classList.remove('open')
        computerBoard.push(gameBoard[open[num].dataset.value]);
        gameProgress.push(open[num].dataset.value);
    }

    function result() {
        const winCondition1 = ['0', '1', '2'];
        const winCondition2 = ['3', '4', '5'];
        const winCondition3 = ['6', '7', '8'];
        const winCondition4 = ['0', '3', '6'];
        const winCondition5 = ['1', '4', '7'];
        const winCondition6 = ['2', '5', '8'];
        const winCondition7 = ['0', '4', '8'];
        const winCondition8 = ['2', '4', '6'];

        if (winCondition1.every(r => playerBoard.includes(r)) == true ||
            winCondition2.every(r => playerBoard.includes(r)) == true ||
            winCondition3.every(r => playerBoard.includes(r)) == true ||
            winCondition4.every(r => playerBoard.includes(r)) == true ||
            winCondition5.every(r => playerBoard.includes(r)) == true ||
            winCondition6.every(r => playerBoard.includes(r)) == true ||
            winCondition7.every(r => playerBoard.includes(r)) == true ||
            winCondition8.every(r => playerBoard.includes(r)) == true) {
            console.log('Player Win!!');
            return gameStart();
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
            return gameStart();
        }
        else if (gameProgress.length === 9) {
            console.log('Tie Game');
            return gameStart();
        }
        else {
            return;
        }
    }
    return { gameBoard, playerBoard, computerBoard, choose };
}

function startGame() {
    const board = document.querySelector('#gameboard');
    board.classList.remove('hidden')
    startButton.classList.add('hidden')
}

function start() {
    const player = gameStart();
    panel.forEach(((num) => {
        num.addEventListener('click', () => player.choose(num.dataset.value));
    }));
}

const startButton = document.querySelector('#gamestart');
startButton.addEventListener('click', () => startGame());
start();





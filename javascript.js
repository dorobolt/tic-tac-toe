// game logic:
// Player choose an array item of game board
// moved that item from game board to player board
// computer choose the array item from game board and move it to computer board
// if player or computer have all some set of array then player or computer win
// if game board is empty then game is tie

const panel = document.querySelectorAll('.panel');
const playAgain = document.querySelector('#retry')
const startButton = document.querySelector('#gamestart');
const gameResult = document.querySelector('#result');
const playerName = document.querySelector('#name');
const forms = document.querySelector('#forms');
let game = 0;
let namePlayer = `player`;

function gameStart() {
    const gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    let gameProgress = [];
    let player1Board = [];
    let player2Board = [];
    const choose = (board) => {
        console.log(gameProgress.includes(player1Board))
        if (gameProgress.includes(gameBoard[board]) == true && player1Board.length !== 0) return
        panel[board].classList.add('player1')
        panel[board].classList.remove('open')
        player1Board.push(gameBoard[board]);
        gameProgress.push(board);
        result();
        computerChoose();
        result();
        console.log(player1Board);
        console.log(player2Board);
        console.log(gameProgress);

    }
    const computerChoose = () => {
        if (game !== 0) {
            const open = document.querySelectorAll('.open');
            let num = Math.floor(open.length * Math.random());
            open[num].classList.add('player2')
            open[num].classList.remove('open')
            player2Board.push(gameBoard[open[num].dataset.value]);
            gameProgress.push(open[num].dataset.value);
        }
        else return
    }

    const result = () => {
        const winCondition = [
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['0', '4', '8'],
            ['2', '4', '6']
        ]
        for (let i = 0; i < winCondition.length; i++) {
            if (winCondition[i].every(r => player1Board.includes(r)) == true) {
                console.log('player1 win!')
                gameResult.textContent = `${namePlayer} Win !!!`
                endGame();
            }
            else if (winCondition[i].every(r => player2Board.includes(r)) == true) {
                console.log('player2 win!')
                gameResult.textContent = `${namePlayer} You Lose !!`
                endGame();
            }
            else if (gameProgress.length === 9) {
                console.log('Tie Game');
                gameResult.textContent = 'Tie Game'
                endGame();
            }
        }
    }

    const endGame = () => {
        game = 0;
        panel.forEach((num) => {
            num.classList.add('disable')
        })
        playAgain.classList.remove('hidden');
    }

    const retry = () => {
        panel.forEach((num) => {
            num.classList.remove('player1')
            num.classList.remove('player2')
            num.classList.remove('disable')
            if (num.classList.contains('open') !== true) {
                num.classList.add('open')
            }
        })
        gameResult.textContent = ''
        gameProgress = [];
        player1Board = [];
        player2Board = [];
        game = 1;
        console.log(gameProgress)
    }

    return { gameBoard, player1Board, player2Board, choose, retry };
}

function startGame() {
    const board = document.querySelector('#gameboard');
    board.classList.remove('hidden')
    startButton.classList.add('hidden')
    forms.classList.add('hidden')
    namePlayer = playerName.value
    game = 1;
    console.log(game)
    panel.forEach(((num) => {
        num.addEventListener('click', () => player.choose(num.dataset.value));
    }))
}

const player = gameStart();
startButton.addEventListener('click', () => startGame());
playAgain.addEventListener('click', function () {
    player.retry();
    game = 1;
});








const playAgain = document.querySelector('#retry')
const startButton = document.querySelector('#gameStart');

const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
let order = 1;

function gameStart() {
    const panel = document.querySelectorAll('.panel');
    const board = document.querySelector('#gameBoard');
    const gameResult = document.querySelector('#result');
    const playerName = document.querySelector('#name');
    const forms = document.querySelector('#forms');
    const choosePlayer = document.querySelector('#choosePlayer')
    let game = 0;
    let namePlayer = `Player`;
    const gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    let gameProgress = [];
    let player1Board = [];
    let player2Board = [];
    const startGame = () => {
        board.classList.remove('hidden');
        startButton.classList.add('hidden');
        forms.classList.add('hidden');
        choosePlayer.classList.add('hidden');
        namePlayer = playerName.value;
        game = 1;
        console.log(game);
        if (order === 2) player.computerChoose();
        panel.forEach(((num) => {
            num.addEventListener('click', () => player.choose(num.dataset.value));
        }))
    }
    const choose = (board) => {
        if (gameProgress.includes(gameBoard[board]) == true && player1Board.length !== 0) return
        panel[board].classList.add('player1')
        panel[board].classList.remove('open')
        player1Board.push(gameBoard[board]);
        gameProgress.push(board);
        result();
        computerChoose();
        result();
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
        board.classList.add('hidden');
        playAgain.classList.add('hidden');
        startButton.classList.remove('hidden');
        forms.classList.remove('hidden');
        choosePlayer.classList.remove('hidden');
    }
    return { gameBoard, player1Board, player2Board, choose, retry, computerChoose, startGame };
}

const player = gameStart();
startButton.addEventListener('click', () => player.startGame());
playAgain.addEventListener('click', () => player.retry());
player1.addEventListener('click', () => {
    order = 1;
    player1.classList.add('pushed');
    player2.classList.remove('pushed');
})
player2.addEventListener('click', () => {
    order = 2;
    player2.classList.add('pushed');
    player1.classList.remove('pushed');
})







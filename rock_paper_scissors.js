let computer;
function computerMove() {
    const number = Math.random();
    if (number < 1 / 3) {
        return 'rock'
    }
    else if (number > 1 / 3 && number < 2 / 3) {
        return 'paper'
    }
    else {
        return 'scissors'
    }

}

document.querySelector('.js-btn-rock').addEventListener('click',()=>{
    playGame('rock')
})
document.querySelector('.js-btn-paper').addEventListener('click',()=>{
    playGame('paper')
})
document.querySelector('.js-btn-scissors').addEventListener('click',()=>{
    playGame('scissors')
})

function playGame(playerMove) {
    computer = computerMove();
    let result = ''
    let score = {
        wins: 0,
        loses: 0,
        ties: 0
    }
    score = JSON.parse(localStorage.getItem('score')) ||
    {
        wins: 0,
        loses: 0,
        ties: 0
    }

    if (playerMove === 'rock') {
        if (computer === 'rock') {
            result = 'tie.'
        }
        else if (computer === 'paper') {
            result = 'You lose.'
        }
        else {
            result = 'You win.'
        }

    }
    else if (playerMove === 'paper') {
        if (computer === 'rock') {
            result = 'You win.'
        }
        else if (computer === 'paper') {
            result = 'tie.'
        }
        else {
            result = 'You lose.'
        }
    }
    else if (playerMove === 'scissors') {
        if (computer === 'rock') {
            result = 'You lose.'
        }
        else if (computer === 'paper') {
            result = 'You win.'
        }
        else {
            result = 'tie.'
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    }
    else if (result === 'You lose.') {
        score.loses += 1;
    }
    else if (result === 'tie.') {
        score.ties += 1
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.choice').innerHTML =
        `You <img src="./img/${playerMove}-emoji.png" alt=""> - <img src="./img/${computer}-emoji.png" alt="">Compputer`;
    document.querySelector('.result').innerHTML = result
    document.querySelector('.final').innerHTML = `wins: ${score.wins} lose: ${score.loses} tie:${score.ties}`
}


function reset() {
    score = {
        wins: 0,
        loses: 0,
        ties: 0
    }
    localStorage.removeItem('score')
    document.querySelector('.final').innerHTML = 'wins: 0  lose: 0  tie:0'
    document.querySelector('.choice').innerHTML = ''
    document.querySelector('.result').innerHTML = ''

}

document.querySelector('.js-btn-reset').addEventListener('click', ()=>{
    reset()
})

document.querySelector('.js-btn-auto').addEventListener('click', ()=>{
    autoPlay()
})
let isAuto = false
let idInterval;
const stop = document.querySelector('.auto-btn')
function autoPlay() {
    if (!isAuto) {
            idInterval = setInterval(function () {
            const playerMove = computerMove()
            playGame(playerMove)
        }, 1000)
        stop.innerHTML = 'Stop'
        isAuto = true
    }
    else{
        clearInterval(idInterval)
        isAuto = false
        stop.innerHTML ='Auto play'
    }

}

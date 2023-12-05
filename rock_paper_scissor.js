let computer;
function computerMove() {
    return Math.random();
}

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
        ties: 0}

    if (playerMove === 'rock') {
        if (computer < 1 / 3) {
            result = 'tie.'
            computer = 'rock'
        }
        else if (computer >= 1 / 3 && computer <= 2 / 3) {
            result = 'You lose.'
            computer = 'paper'
        }
        else {
            result = 'You win.'
            computer = 'scissor'
        }

    }
    else if (playerMove === 'paper') {
        if (computer < 1 / 3) {
            result = 'You win.'
            computer = 'rock'
        }
        else if (computer >= 1 / 3 && computer <= 2 / 3) {
            result = 'tie.'
            computer = 'paper'
        }
        else {
            result = 'You lose.'
            computer = 'scissor'
        }
    }
    else if (playerMove === 'scissor') {
        if (computer < 1 / 3) {
            result = 'You lose.'
            computer = 'rock'
        }
        else if (computer >= 1 / 3 && computer <= 2 / 3) {
            result = 'You win.'
            computer = 'paper'
        }
        else {
            result = 'tie.'
            computer = 'scissor'
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
    `You <img src="../img/${playerMove}-emoji.png" alt=""> - <img src="../img/${computer}-emoji.png" alt="">Compputer`;
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
    document.querySelector('.final').innerHTML = 'wins: 0 lose: 0 tie:0'
    document.querySelector('.choice').innerHTML = ''
    document.querySelector('.result').innerHTML = ''

}

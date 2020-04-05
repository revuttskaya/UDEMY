//  Add  another dice to the game, so that  there are two dices now. The player looses his current score when one of them is a 1.

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Random number
        var dice0 = Math.floor(Math.random() * 6 + 1);
        var dice1 = Math.floor(Math.random() * 6 + 1);

        //2. Display result
        var diceDOM0 = document.querySelector('.dice-0');
        var diceDOM1 = document.querySelector('.dice-1');
        diceDOM0.style.display = 'block';
        diceDOM1.style.display = 'block';
        diceDOM0.src = 'dice-' + dice0 + '.png';
        diceDOM1.src = 'dice-' + dice1 + '.png';

        //3. Update round score If the rolled number was not 1
        if (dice0 !== 1 && dice1 !== 1) {
            //Add score
            roundScore += (dice0 + dice1);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add Current score to Global score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
//Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
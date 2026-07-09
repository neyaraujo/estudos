"use strict";

/* ============ CHECK MOVE ============ */

function checkMove(index) {

    Game.player.push(index);

    const i = Game.player.length - 1;

    if (Game.player[i] !== Game.sequence[i]) {
        return gameOver();
    }

    if (Game.player.length === Game.sequence.length) {
        return winRound();
    }
}

/* ============ WIN ROUND ============ */

async function winRound() {

    disableCards();
    setMessage("Excelente!");

    if (Game.score > Game.best) {
        Game.best = Game.score;
        saveBest();
    }

    updateUI();

    await wait(900);

    nextRound();
}

/* ============ GAME OVER ============ */

async function gameOver() {

    Game.state = GameState.OVER;
    disableCards();

    setMessage("Game Over");

    shake();

    if (Game.score > Game.best) {
        Game.best = Game.score;
        saveBest();
    }

    updateUI();

    elements.finalRound.textContent = Game.round;
    elements.finalScore.textContent = Game.score;
    elements.finalBestScore.textContent = Game.best;

    await wait(900);

    elements.gameOverScreen.classList.add("game__overlay--visible");
}

/* ============ ANIMAÇÃO ERRO ============ */

function shake() {
    elements.cards.forEach(c => {
        c.classList.add("game__card--error");

        setTimeout(() => {
            c.classList.remove("game__card--error");
        }, 500);
    });
}
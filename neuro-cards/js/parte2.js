"use strict";

/* ============ GERAÇÃO ============ */

function generateCard() {
    const index = Math.floor(Math.random() * CONFIG.TOTAL);
    Game.sequence.push(index);
}

/* ============ PRÓXIMA RODADA ============ */

async function nextRound() {

    Game.state = GameState.SHOW;

    Game.round++;
    Game.score = Game.round * CONFIG.POINTS;

    Game.player = [];

    updateUI();
    setMessage("Memorize...");

    generateCard();

    disableCards();

    await wait(800);

    await showSequence();

}

/* ============ MOSTRAR SEQUÊNCIA ============ */

async function showSequence() {

    disableCards();

    for (let i = 0; i < Game.sequence.length; i++) {

        const index = Game.sequence[i];
        const card = elements.cards[index];

        highlight(card);

        await wait(600);
        unhighlight(card);

        await wait(250);
    }

    Game.state = GameState.PLAYER;

    enableCards();
    setMessage("Sua vez");
}

/* ============ HIGHLIGHT ============ */

function highlight(card) {
    card.classList.add("game__card--active");
}

function unhighlight(card) {
    card.classList.remove("game__card--active");
}
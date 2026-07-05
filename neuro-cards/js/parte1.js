"use strict";

/* ===================== HELPERS ===================== */

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function wait(ms) {
    return new Promise(res => setTimeout(res, ms));
}

/* ===================== ELEMENTOS ===================== */

const elements = {
    cards: $$(".game__card"),

    round: $("#round"),
    score: $("#score"),
    bestScore: $("#best-score"),

    message: $("#message"),

    startScreen: $("#start-screen"),
    gameOverScreen: $("#game-over-screen"),

    startButton: $("#start-button"),
    restartButton: $("#restart-button"),

    finalRound: $("#final-round"),
    finalScore: $("#final-score"),
    finalBestScore: $("#final-best-score")
};

/* ===================== ESTADO ===================== */

const GameState = {
    MENU: "MENU",
    SHOW: "SHOW",
    PLAYER: "PLAYER",
    OVER: "OVER"
};

const CONFIG = {
    TOTAL: 5,
    STORAGE: "memory_best",
    POINTS: 10
};

const Game = {
    state: GameState.MENU,
    sequence: [],
    player: [],
    round: 0,
    score: 0,
    best: 0,
    input: false
};

/* ===================== INIT ===================== */

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadBest();
    bindEvents();
    updateUI();
    setMessage("Clique em Iniciar");
    disableCards();
}

/* ===================== EVENTS ===================== */

function bindEvents() {
    elements.startButton.addEventListener("click", startGame);
    elements.restartButton.addEventListener("click", startGame);

    elements.cards.forEach(card => {
        card.addEventListener("click", handleClick);
    });
}

/* ===================== UI ===================== */

function setMessage(text) {
    elements.message.textContent = text;
}

function updateUI() {
    elements.round.textContent = Game.round;
    elements.score.textContent = Game.score;
    elements.bestScore.textContent = Game.best;
}

/* ===================== CARDS ===================== */

function enableCards() {
    Game.input = true;
    elements.cards.forEach(c => c.disabled = false);
}

function disableCards() {
    Game.input = false;
    elements.cards.forEach(c => c.disabled = true);
}

/* ===================== STORAGE ===================== */

function loadBest() {
    const v = localStorage.getItem(CONFIG.STORAGE);
    Game.best = v ? Number(v) : 0;
}

function saveBest() {
    localStorage.setItem(CONFIG.STORAGE, Game.best);
}

/* ===================== START ===================== */

async function startGame() {
    reset();

    elements.startScreen.classList.remove("game__overlay--visible");
    elements.gameOverScreen.classList.remove("game__overlay--visible");

    setMessage("Prepare-se...");

    await wait(700);

    nextRound();
}

/* ===================== RESET ===================== */

function reset() {
    Game.sequence = [];
    Game.player = [];
    Game.round = 0;
    Game.score = 0;
    Game.state = GameState.MENU;

    disableCards();
    updateUI();
}

/* ===================== CLICK ===================== */

function handleClick(e) {
    if (!Game.input) return;

    const index = Number(e.target.dataset.card);

    checkMove(index);
}